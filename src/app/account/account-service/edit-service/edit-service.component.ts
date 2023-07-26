import { Component,ViewChild,ElementRef } from '@angular/core';
import { Modal } from 'flowbite'
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent {
  @ViewChild('editService', { static: false }) editService:any= ElementRef;
  modaleditService:any;
  typePrice:any='free';
  constructor(){

  }

  ngOnInit(){

  }
  openeditService() {
    console.log(this.editService)
    this.modaleditService = new Modal(this.editService.nativeElement);
    this.modaleditService.show();
  }

  ngAfterViewInit(){
    // this.openeditService()
  }

  closeModal(){
    this.modaleditService.hide();
  }

chooseTypePrice(typePrice:any){
  this.typePrice=typePrice;
}
}
