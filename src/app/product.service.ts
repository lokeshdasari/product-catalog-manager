import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 50, category: 'Electronics', rating: 4.5 },
    { id: 2, name: 'Product 2', price: 30, category: 'Clothing', rating: 4 },
    { id: 3, name: 'Product 3', price: 70, category: 'Electronics', rating: 4.7 },
    { id: 4, name: 'Product 4', price: 40, category: 'Toys', rating: 3.8 },
  ];

  constructor(private router: Router) { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
    this.router.navigate(['/product-list']); 
  }
}
