import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _url = 'http://localhost:3000/api/order'

  constructor(private _http : HttpClient) { }

  getOrders(){
    return this._http.get(this._url);
  }

  getOrderById(id: any){
    return this._http.get(this._url + id);
  }

  updateOrder(id:any , order: any){
    return this._http.put(this._url+'/'+id, order);
  }

  deleteOrder(id : any){
    return this._http.delete(this._url + '/' + id);
  }

  createOrder(order : any){
    return this._http.post(this._url, order);
  }

}
