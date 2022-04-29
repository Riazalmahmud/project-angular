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
  constructor(private apiservice: ProductApiService) {}

  ngOnInit(): void {
    this.apiservice
      .getProdut()
      .pipe(
        tap(() => {
          this.loading = false;
        }),

        catchError((error) => {
          alert('sorry ! you get wrong page ');
          console.log(error);
          return error;
        })
      )
      .subscribe((products: any) => {
        console.log(products);
        this.products = products;
      });
  }
}
