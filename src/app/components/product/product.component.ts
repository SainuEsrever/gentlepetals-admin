import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  res: any
  data: any
  errorMessage: string = ""

  name = ''
  amount = 0
  price = 0
  description = ''
  categoryId = ''

  product = {
    name: '',
    amount: 0,
    price: 0,
    description: '',
    categoryId: '',
  }

  constructor(private _service: ProductService) { }

  ngOnInit(): void {
    this.getProducts();

   this.name = ''
   this.amount = 0
   this.price = 0
   this.description = ''
   this.categoryId = ''
  }

  getProducts() {
    this._service.getProducts().subscribe(
      (res) => {
        this.res = res;
        this.data = this.res.data.docs;
      },
      (err) => {
        this.errorMessage = err;
      }
    )
  }

  createProduct() {

    this.product.name = this.name;
    this.product.amount = this.amount;
    this.product.price = this.price;
    this.product.description = this.description;
    this.product.categoryId = this.categoryId;

    this._service.addProduct(this.product).subscribe(
      (res) => {
        this.res = res;
        this.getProducts();
      },
      (err) => {
        this.errorMessage = err;
      }
    )
  }

  editProduct(product: any) {
    this.name = product.name;
    this.amount = product.amount;
    this.price = product.price;
    this.description = product.description;
    this.categoryId = product.categoryId;
  }

  updateProduct() {
    this._service.updateProduct(this.product).subscribe(
      (res) => {
        this.res = res;
        this.getProducts();
      },
      (err) => {
        this.errorMessage = err;
      }
    )
  } 

  deleteProduct(product: any) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      this._service.deleteProduct(product._id).subscribe(
        (res) => {
          this.res = res;
          this.getProducts();
        },
        (err) => {
          this.errorMessage = err;
        }
      )
    }
  }




}
