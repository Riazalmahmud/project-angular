import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ProductApiService } from 'src/app/apiService/product-api.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  panelOpenState = false;
  products: any;
  loading = true;
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private apiservice: ProductApiService,) {}

  ngOnInit(): void {
    this.apiservice.getProdut().subscribe((products: any) => {
      // console.log(products);
      this.products = products;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
}
