import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { BillingComponent } from './components/billing/billing.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { LoginInterceptor } from './interceptors/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    BlogComponent,
    CategoryComponent,
    BillingComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- Include module in our AppModule
    FormsModule // <-- Include module in our AppModule
  ],
  providers: [{
     provide: HTTP_INTERCEPTORS, 
     useClass: LoginInterceptor,
     multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
