import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holisticfe';
  isLoading:any=false;
  account:any=[];
  constructor(
    private http:HttpClient,
    private global:GlobalService
  ){

  }
  ngOnInit()
  {
    if(this.global.getToken()){
      this.getAccount();
    }
  }

  getAccount()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/auth/account', options)
      .subscribe(response => {

      let data: any = response;
      console.log('account',response);
      if(data.status=='success'){
        this.account=data.data;
      }

      }, error => {
        localStorage.clear();
        window.location.assign('home')
        console.log(error);
        this.isLoading = false;
      });
  }
}
