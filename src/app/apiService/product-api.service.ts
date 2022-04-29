import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  getProdut(): Observable<any>{
    return this.http.get('http://localhost:3000/comments').pipe(
      map((products: any) => {
        return products;
      })
    );
  }
}
