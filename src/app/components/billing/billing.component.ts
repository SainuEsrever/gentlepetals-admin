import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  res: any
  data: any
  errorMessages: any


  _id = ''
  orderId = ''
  accountId = ''
  status = ''
  method = ''
  totalPrice = ''

  billing = {
    orderId: '',
    accountId: '',
    status: '',
    method: '',
    totalPrice: ''
  }

  constructor(private _billingService: BillingService) { }

  ngOnInit(): void {

    this._id = '';
    this.orderId = '';
    this.accountId = '';
    this.status = '';
    this.totalPrice = '';

    this.billing = {
      orderId: '',
      accountId: '',
      status: '',
      method: '',
      totalPrice: ''
    }

    this.getBilling();
  }

  getBilling() {
    this._billingService.getBilling()
      .subscribe(
        res => {
          this.res = res;
          this.data = this.res.data;
          console.log(this.data);
        },
        err => {
          this.errorMessages = err.error;
        }
      )
  }

  getBillingById(id: any) {
    this._billingService.getBillingById(id)
      .subscribe(
        res => {
          this.res = res;
          this.data = this.res.data;
        },
        err => {
          this.errorMessages = err.error;
        }
      )
  }

  addBilling() {

    this.billing = {
      orderId: this.orderId,
      accountId: this.accountId,
      status: this.status,
      method: this.method,
      totalPrice: this.totalPrice
    }

    this._billingService.addBilling(this.billing)
      .subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          this.errorMessages = err.error;
        }
      )
  }

  editBilling(bill: any) {
    this._id = bill._id;
    this.orderId = bill.orderId;
    this.accountId = bill.accountId._id;
    this.method = bill.method;
    this.status = bill.status;
    this.totalPrice = bill.totalPrice;
  }

  updateBilling() {

    this.billing = {
      orderId: this.orderId,
      accountId: this.accountId,
      method: this.method,
      status: this.status,
      totalPrice: this.totalPrice
    }

    this._billingService.updateBilling(this._id, this.billing)
      .subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          this.errorMessages = err.error;
        }
      )
  }


  deleteBilling(billing: any) {
    if(window.confirm('Are you sure you want to delete this billing?')){
      this._billingService.deleteBilling(billing._id)
        .subscribe(
          res => {
            this.ngOnInit();
          },
          err => {
            this.errorMessages = err.error;
          }
        )
    }
  }
}
