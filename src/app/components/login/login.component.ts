import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginObj = {
    email: '',
    password: ''
  }


  constructor( private _loginService: LoginService) { }

  ngOnInit(): void {
      
  }

  onLogin(){
    this._loginService.onLogin(this.loginObj).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.accessToken)
        console.log(localStorage.getItem('token'))
      },
      err => console.log(err)
    )
  }

}
