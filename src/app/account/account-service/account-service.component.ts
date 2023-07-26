import { Component,ViewChild,ElementRef } from '@angular/core';
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface } from "flowbite";
@Component({
  selector: 'app-account-service',
  templateUrl: './account-service.component.html',
  styleUrls: ['./account-service.component.scss']
})
export class AccountServiceComponent {
  @ViewChild('dropdown', { static: false }) dropdown:any= ElementRef;
  @ViewChild('buttonDropdown', { static: false }) buttonDropdown:any= ElementRef;
  menuDropdown:any;
  dropdownOpen:any=false;
  top = '0px';
  left = '0px';
  ngAfterViewInit(){
    this.dropDownInit();
  }

  dropDownInit(){
  }

  openDropdown(el:any,event:any){
    this.dropdownOpen=!this.dropdownOpen;

    if (this.dropdownOpen) {
      this.top = event.pageY + 'px';
      this.left = event.pageX + 'px';
    }
  }
}
