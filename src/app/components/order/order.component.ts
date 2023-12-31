import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  data: any;
  res : any
  errorMessage: string = '';

  order = {
    accountId: '',
    products: [{
      productId: '',
      amount: 0,
    }],
    totalPrice: 0,
    address: '',
    status: '',
  }

  _id = ''
  accountId = ''
  products = {
    productId: '',
    amount: 0,
  }
  totalPrice = 0
  address = ''
  status = ''

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {

    this._id = ''
    this.accountId = ''
    this.products = {
      productId: '',
      amount: 0,
    }
    this.totalPrice = 0
    this.address = ''
    this.status = ''
    

    this.getOrders()
  }

  getOrders() {
    this._orderService.getOrders()
      .subscribe(
        res => {
          this.res = res
          this.data = this.res.data
          console.log(res)
        },
        err => this.errorMessage = err
      )
  }

  getOrderById(id: any) {
    this._orderService.getOrderById(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  createOrder() {
    
    this.order.accountId = this.accountId
    this.order.products = [{
      productId: this.products.productId,
      amount: this.products.amount
    }]
    this.order.totalPrice = this.totalPrice
    this.order.address = this.address
    this.order.status = this.status

    console.log(this.order)

    this._orderService.createOrder(this.order)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

  editOrder(order: any) {
    this._id = order._id
    this.accountId = order.accountId._id

    for(let i = 0; i < order.products.length; i++){
      this.products.productId = order.products[i].productId
      this.products.amount = order.products[i].amount
    }

    this.totalPrice = order.totalPrice
    this.address = order.address
    this.status = order.status

    console.log(this.products)
  }

  updateOrder() {

    this.order.accountId = this.accountId
    this.order.products = [{
      productId: this.products.productId,
      amount: this.products.amount
    }]
    this.order.totalPrice = this.totalPrice
    this.order.address = this.address
    this.order.status = this.status


    this._orderService.updateOrder(this._id ,this.order)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

  deleteOrder(id: any) {
    if(window.confirm('Are you sure you want to delete this order')){
      this._orderService.deleteOrder(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
    }
  }

}
