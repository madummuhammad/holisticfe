import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isLoading:any=false;
  account:any=[];
  constructor(
    private http:HttpClient,
    private global:GlobalService
  ){

  }
  ngOnInit()
  {
    this.getAccount();
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
        console.log(error);
        this.isLoading = false;
      });
  }


}
