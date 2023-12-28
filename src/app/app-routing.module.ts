import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { CategoryComponent } from './components/category/category.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path : "products", component: ProductComponent},
  {path : "login", component: LoginComponent},
  {path : "orders", component: OrderComponent},
  {path : "categories", component: CategoryComponent},
  {path : "blogs", component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
