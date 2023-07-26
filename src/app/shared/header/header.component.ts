import { Component,ViewChild,ElementRef } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('dropdownProfile', { static: false }) dropdownProfile:any= ElementRef;
  @ViewChild('buttonDropdown', { static: false }) buttonDropdown:any= ElementRef;
  profileDropdown:any;
  isLoading:any=false;
  name:any=null;
  constructor(
    public global:GlobalService,
    private http:HttpClient
  ){

  }
  isHeader:any=false;

  openHeader()
  {
    this.isHeader=!this.isHeader
  }

  ngOnInit(){
    this.getAccount();
  }

  ngAfterViewInit(){
    this.dropDownInit();
  }

  dropDownInit(){
    const dropdown:DropdownInterface  = new Dropdown(this.dropdownProfile.nativeElement,this.buttonDropdown.nativeElement);
    this.profileDropdown=dropdown
  }

  openDropdown(){
    this.profileDropdown.show();
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
        this.name=data.data.first_name+' '+data.data.last_name;
      }

      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  logout() {
    localStorage.clear();
    window.location.assign('/home');
  }
}
