import { Component,ViewChild,ElementRef } from '@angular/core';
import { Modal } from 'flowbite'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  @ViewChild('createService', { static: false }) createService:any= ElementRef;
  modalCreateService:any;
  typePrice:any='free';
  constructor(){

  }

  ngOnInit(){

  }
  openCreateService() {
    console.log(this.createService)
    this.modalCreateService = new Modal(this.createService.nativeElement);
    this.modalCreateService.show();
  }

  ngAfterViewInit(){
    // this.openCreateService()
  }

  closeModal(){
    this.modalCreateService.hide();
  }

chooseTypePrice(typePrice:any){
  this.typePrice=typePrice;
}
}
