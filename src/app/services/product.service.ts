import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http : HttpClient) { }

  _url = "http://localhost:3000/api/product"

  getProducts() {
    return this._http.get(this._url);
  }

  getProductById(id: any) {
    return this._http.get(this._url + "/" + id);
  }

  addProduct(product: any) {
    return this._http.post(this._url, product);
  }

  updateProduct(id:any, product: any) {
    return this._http.patch(this._url + "/" + id, product);
  }

  deleteProduct(id: any) {
    return this._http.delete(this._url + "/" + id);
  }
}
