import { Component,ViewChild,ElementRef } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";
@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent {
  @ViewChild('dropdown', { static: false }) dropdown:any= ElementRef;
  @ViewChild('buttonDropdown', { static: false }) buttonDropdown:any= ElementRef;
  dropdownOpen: boolean = false;
  isHeader:any=false;
  url:any=null;
  profileDropdown:any;
  constructor(
    public global:GlobalService
  ){
    var url=window.location.pathname;
    this.url=url.split('/')[1];
    console.log('url',this.url)
  }

  openHeader()
  {
    this.isHeader=!this.isHeader
  }

  ngAfterViewInit(){
    this.dropDownInit();
  }

  dropDownInit(){
    const dropdown:DropdownInterface  = new Dropdown(this.dropdown.nativeElement,this.buttonDropdown.nativeElement);
    this.profileDropdown=dropdown
  }

  openDropdown(){
    this.profileDropdown.show();
  }

  logout() {
    localStorage.clear();
    window.location.assign('/home');
  }
}
