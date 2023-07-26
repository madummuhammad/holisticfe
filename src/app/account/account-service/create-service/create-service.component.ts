import { Component,ViewChild,ElementRef } from '@angular/core';
import { Modal } from 'flowbite'
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent {
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
