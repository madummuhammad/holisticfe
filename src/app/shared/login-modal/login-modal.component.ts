import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Modal } from 'flowbite'
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  @ViewChild('loginModal', { static: false }) loginModal:any= ElementRef;
  no_hp:any=null;
  password:any=null;
  error:any=[];
  wrongCredentials:any=false;
  isLoading:any=false;
  showPassword:any=false;
  modalLogin:any;
  constructor(
    public global:GlobalService,
    private http:HttpClient,
  ){

  }

  togglePassword(){
    this.showPassword=!this.showPassword
  }

  openLogin() {
    this.modalLogin = new Modal(this.loginModal.nativeElement);
    this.modalLogin.show();
  }

  closeLogin(){
    this.modalLogin.hide();
  }

  login()
  {
    this.isLoading=true;
     let postData = {
      no_hp: this.no_hp,
      password: this.password,
    };

      var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });


    let options = { headers: reqHeader };

    this.http.post(this.global.url+'/auth/login', postData,options).subscribe(
      (response) => {
        let data:any=response;
        console.log('Login', response);
        if(data.errors){
          this.error=data.errors;
          this.isLoading=false;
        } else {
          localStorage.setItem('is_login', '1');
          localStorage.setItem('login_token', data.access_token);
          window.location.assign('home');
        }
      },
      (error) => {
        this.wrongCredentials=true;
        this.isLoading=false;
        console.error('Login gagal', error);
      }
    );

    console.log('postData',postData)
  }
}
