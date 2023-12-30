import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  _url = "http://localhost:3000/api/cart";

  constructor(private _http: HttpClient) { }

  getCartItems(){
    return this._http.get(this._url);
  }

  getCartItem(id:any){
    return this._http.get(this._url + '/'+id);
  }

  addCartItem(item:any){
    return this._http.post(this._url, item);
  }

  updateCartItem(_id:any, item:any){
    return this._http.patch(this._url + '/'+_id, item);
  }

  deleteCartItem(id:any){
    return this._http.delete(this._url + '/'+id);
  }


}
