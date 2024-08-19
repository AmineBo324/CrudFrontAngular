import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Product {
  id: number;
  nom: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit { 
  
  id!: number;
  product: Product = {
    id: 0,
    nom: '',
    description: '',
    price: 0
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      (data: Product) => {
        this.product = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.productService.updateProduct(this.id, this.product).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    );
  }

}
