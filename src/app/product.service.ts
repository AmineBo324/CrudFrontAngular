import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  nom: string;
  description: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/v1/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(produit : Product):Observable<Object>{
    return this.http.post(`${this.apiUrl}`, produit)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id : number) : Observable<Object>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
