import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent  {
  @ViewChild('registerModal', { static: false }) registerModal:any= ElementRef;
  type:any='seeker';
  email: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  password_confirmation: string = '';
  country: string = 'Indonesia';
  no_hp: string = '';
  error:any=[];
  modalRegister:any;
  showPassword:any=false;
  showPasswordConfirmation:any=false;
  isLoading:any=false;
  constructor(
    private http:HttpClient,
    public global:GlobalService,
    private router:Router,

  )
  {

  }

  chooseType(type:any){
    this.type=type
  }
  chooseCountry(country:any){
    this.country=country
  }

  togglePassword(){
    this.showPassword=!this.showPassword
  }
  togglePasswordConfirmation(){
    this.showPasswordConfirmation=!this.showPasswordConfirmation
  }

  ngOnInit()
  {
    console.log(this.global.isLogin)
  }

  openRegister() {
    this.modalRegister = new Modal(this.registerModal.nativeElement);
    this.modalRegister.show();
  }

  closeRegister(){
    this.modalRegister.hide();
  }

  register()
  {
    this.isLoading=true;
     let postData = {
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      password: this.password,
      password_confirmation: this.password_confirmation,
      country: this.country,
      type:this.type,
      no_hp: this.no_hp
    };

      var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });


    let options = { headers: reqHeader };

    this.http.post(this.global.url+'/auth/register', postData,options).subscribe(
      (response) => {
        let data:any=response;
        console.log('Pendaftaran', response);
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
        this.isLoading=false;
        console.error('Pendaftaran gagal', error);
      }
    );

    console.log('postData',postData)
  }
}
