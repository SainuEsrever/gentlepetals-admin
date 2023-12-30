import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { CategoryComponent } from './components/category/category.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { BillingComponent } from './components/billing/billing.component';

const routes: Routes = [
  {path : "", component: LoginComponent},
  {path : "products", component: ProductComponent},
  {path : "login", component: LoginComponent},
  {path : "orders", component: OrderComponent},
  {path : "categories", component: CategoryComponent},
  {path : "blogs", component: BlogComponent},
  {path : "carts", component: CartComponent},
  {path : "billings", component: BillingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
