import { Component,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-account-product',
  templateUrl: './account-product.component.html',
  styleUrls: ['./account-product.component.scss']
})
export class AccountProductComponent {
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
