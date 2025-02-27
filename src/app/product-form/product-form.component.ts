import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<Product>();
  name: string = '';
  price: number = 0;
  category: string = 'Electronics';
  rating: number = 3;

  constructor(private productService: ProductService) { }

  addProduct(): void {
    if (this.name && this.price && this.category && this.rating) {
      const newProduct: Product = {
        id: 0,
        name: this.name,
        price: this.price,
        category: this.category,
        rating: this.rating
      };
      this.productService.addProduct(newProduct);
      this.productAdded.emit(newProduct); // Emit event after adding
      this.resetForm();
    }
  }

  resetForm(): void {
    this.name = '';
    this.price = 0;
    this.category = 'Electronics';
    this.rating = 3;
  }
}
