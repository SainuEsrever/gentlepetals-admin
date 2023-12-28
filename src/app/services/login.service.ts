import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/api/auth/signin'

  constructor( private _http: HttpClient ) { }

  onLogin(obj : any):Observable<any>{
    return this._http.post(this.url, obj)
  }

  
}
