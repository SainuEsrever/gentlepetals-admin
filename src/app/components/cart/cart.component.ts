import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  res : any 
  data : any
  errorMessages : any

  cart : any = {
    accountId : '',
    products : [{
      productId : '',
      amount: 0
    }],
    totalPrice : 0
  }

  _id = ''
  accountId = ''
  products : any = [{
    productId : '',
    amount: 0
  }]
  totalPrice = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cart = {
      accountId : '',
      products : [{
        productId : '',
        amount: 0
      }],
      totalPrice : 0
    }

    this._id = ''
    this.accountId = ''
    this.products = [{
      productId : '',
      amount: 0
    }]
    this.totalPrice = 0

    this.getCartItems()
  }

  quantity: number = 0
  inputs: any[] = [];
  inputValues: any[] = [];

updateInputs() {
  this.inputs = Array(this.quantity).fill(null);
  this.inputValues = Array(this.quantity).fill('');
}

  getCartItems(){
    this.cartService.getCartItems().subscribe(
      res => {
        this.res = res
        this.data = this.res.data
        // console.log(this.data)
      },
      err => {
        this.errorMessages = err
        console.log(this.errorMessages)
      }
    )
  }

  getCartItem(id:any){
    this.cartService.getCartItem(id).subscribe(
      res => {
        this.res = res
        this.data = this.res.data
      },
      err => {
        this.errorMessages = err
        console.log(this.errorMessages)
      }
    )
  }

  addCartItem(){

    this.cart.accountId = this.accountId


    // for(let i = 0; i < this.cart.products.length; i++){
    //   this.cart.products[i]._id = '123'
    // }

    // for(let i = 0; i < this.products.length; i++){
    //   this.cart.products.push(this.products[i])
    // }

    this.cart.products[0] = {
      productId : this.products.productId,
      amount : this.products.amount
    }

    this.cart.totalPrice = this.totalPrice

    console.log(this.cart)
    console.log(this.cart.products)


    this.cartService.addCartItem(this.cart).subscribe(
      res => {
        this.ngOnInit()
      },
      err => {
        this.errorMessages = err
        console.log(this.errorMessages)
      }
    )
  }

  editCartItem(cart:any){

    this.products = []

    this._id = cart._id
    this.accountId = cart.accountId._id
    
    for(let i = 0; i < cart.products.length; i++){
      this.products.push(cart.products[i])
    }

    this.totalPrice = cart.totalPrice

    // console.log(this.products)

    console.log(this.products)
  }

  updateCartItem(){

    this.cart.accountId = this.accountId
    this.cart.products = this.products

    for(let i = 0; i < this.cart.products.length; i++){
      this.cart.products[i]._id = undefined
    }
    
    // for(let i = 0; i < this.products.length; i++){
    //   this.cart.products.push({
    //     productId : this.products[i].productId._id,
    //     amount : this.products[i].amount
    //   })
    // }

    this.cart.totalPrice = this.totalPrice

    console.log(this.cart)

    this.cartService.updateCartItem(this._id,this.cart).subscribe(
      res => {
        this.ngOnInit()
      },
      err => {
        this.errorMessages = err
        console.log(this.errorMessages)
      }
    )
  }

  deleteCartItem(id:any){
    if(window.confirm('Are you sure you want to delete this item?')){
      this.cartService.deleteCartItem(id).subscribe(
        res => {
          this.ngOnInit()
        },
        err => {
          this.errorMessages = err
          console.log(this.errorMessages)
        }
      )
    }
  }
}
