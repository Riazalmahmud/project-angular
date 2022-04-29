import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  getProdutList() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmmount();
    console.log(this.cartDataList)
  }

  getTotalAmmount() {
    let gradTotal = 0;
    this.cartDataList.map((a: any) => {
      gradTotal += a.total;
    });
  }

  removeData() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }
}
