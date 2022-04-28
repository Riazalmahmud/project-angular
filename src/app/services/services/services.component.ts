import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/apiService/product-api.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  panelOpenState = false;
  products: any;
  favoriteSeason !: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private apiservice: ProductApiService) {}

  ngOnInit(): void {

    this.apiservice.getProdut().subscribe(products => {
      console.log(products.length);
      this.products= this.products
    })
  }
}
