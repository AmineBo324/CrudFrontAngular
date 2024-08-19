import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
interface Product {
  id: number;
  nom: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  private getAllProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}
