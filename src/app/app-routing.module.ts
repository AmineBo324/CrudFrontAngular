import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  {path : 'products', component : CrudComponent},
  {path : 'create-product', component : CreateProductComponent},
  {path : 'update-product/:id', component : UpdateProductComponent},
  {path : 'product-list', component : ProductListComponent},
  {path : '', redirectTo : "products", pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
