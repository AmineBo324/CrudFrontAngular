import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

interface Product {
  id: number;
  nom: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  private getAllProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  updateProduct(id : number){
    this.router.navigate(['update-product',id])
  }

  deleteProduct(id : number){
    this.productService.deleteProduct(id).subscribe(data =>{
      console.log(data);
      this.getAllProducts();
    })
  }
}

