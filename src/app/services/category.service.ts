import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _url = 'http://localhost:3000/api/category'

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get<any>(this._url)
  }

  getCategory(id: any) {
    return this._http.get<any>(this._url + '/' + id)
  }

  addCategory(category: any) {
    return this._http.post<any>(this._url, category)
  }

  updateCategory(id : any, category: any) {
    return this._http.put<any>(this._url + '/' + id, category)
  }

  deleteCategory(category: any) {
    return this._http.delete<any>(this._url + '/' + category._id)
  }

  

}
