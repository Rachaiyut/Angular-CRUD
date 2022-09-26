import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/products';
  constructor(private http:  HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  createProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }
  getProductById(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/{id}`)
  }
  updateProducts(id:number, product:Product):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,product)
  }
  deleteProducts(id:number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
