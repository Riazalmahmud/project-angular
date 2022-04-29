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

  getTotalAmmount():number {
    let gradTotal = 0;
    this.cartDataList.map((a: any) => {
      console.log(a, 'this grandTOotall');
      gradTotal += a.total;
      // console.log(gradTotal, "this grandTOotall")
    });
    return gradTotal;
  }

  removeAllData() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }

  removeCartData(product: any) {
    this.cartDataList.map((a: any, index: any) => {
      
      if (product.id === a.id) {
        this.cartDataList.splice(index,1)
      }
    })
  }
}
