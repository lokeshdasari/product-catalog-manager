import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['All', 'Electronics', 'Clothing', 'Toys'];
  selectedCategory: string = 'All';
  sortBy: string = 'price';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => 
      this.selectedCategory === 'All' || product.category === this.selectedCategory
    );
    this.sortProducts();
  }

  sortProducts(): void {
    if (this.sortBy === 'price') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'rating') {
      this.filteredProducts.sort((a, b) => b.rating - a.rating);
    }
  }
  onAddProductClick() {
    this.router.navigate(['/add-product']);
  }
}
