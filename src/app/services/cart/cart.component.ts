import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/cartApi/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProduct:any= 0;
  constructor(private cartApi: CartApiService) { }

  ngOnInit(): void {
    this.cartApi.getProdutList().subscribe(res => {
      this.products = res;
      this.allProduct = this.cartApi.getTotalAmmount();
      console.log(this.allProduct)
    })
  }

  removeProduct(products:any) {
    this.cartApi.removeCartData(products);
  }
  removeallProduct() {
  this.cartApi.removeAllData()
}
}
