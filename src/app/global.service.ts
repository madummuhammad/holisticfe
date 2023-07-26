import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public url:any='http://localhost:8000';
  public env='local'
  public isLogin:any=0;
  loginToken:any=null;
  constructor() {
    if(this.env=='prod'){
      this.url='https://api.holisticstations.com'
    }
    const isLogin = localStorage.getItem('is_login');
    this.isLogin=isLogin;
    this.loginToken = localStorage.getItem('login_token');
  }

  getToken() {
    let token = localStorage.getItem('login_token');
    return token;
  }
}
