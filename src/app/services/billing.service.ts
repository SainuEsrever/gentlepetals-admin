import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  _url = 'http://localhost:3000/api/billing'

  constructor(private _http: HttpClient) { }

  getBilling() {
    return this._http.get(this._url);
  }

  getBillingById(id: any) {
    return this._http.get<any>(this._url + '/' + id);
  }

  addBilling(billing: any) {
    return this._http.post<any>(this._url, billing);
  }

  updateBilling(id:any, billing: any) {
    return this._http.put<any>(this._url + '/' + id, billing);
  }

  deleteBilling(billing: any) {
    return this._http.delete<any>(this._url + '/' + billing._id);
  }

}
