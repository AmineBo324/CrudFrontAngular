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
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  product: Product = { 
    id: 0,                     
    nom: '',  
    description: '',  
    price: 0  
  }; 

  constructor(private productService: ProductService, private router : Router){}

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/products'])
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct()
  }

  ngOnInit(): void {
      
  }
}
