import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  title: string;
  price: number;
  rating: number;
  stock: number;
}

interface ProductResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}
