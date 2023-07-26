import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,ViewChild,ElementRef,Input} from '@angular/core';
import { Modal } from 'flowbite'
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-edit-account-information',
  templateUrl: './edit-account-information.component.html',
  styleUrls: ['./edit-account-information.component.scss']
})
export class EditAccountInformationComponent {
  @ViewChild('editAcountInformation', { static: false }) editAcountInformation:any= ElementRef;
  @Input('account') account:any;
  modaleditAcountInformation:any;
  typePrice:any='free';
  isLoading:any=false;
  constructor(
    private http:HttpClient,
    private global:GlobalService
  ){

  }

  ngOnInit(){

  }
  openModal() {
    console.log(this.editAcountInformation)
    this.modaleditAcountInformation = new Modal(this.editAcountInformation.nativeElement);
    this.modaleditAcountInformation.show();
  }

  ngAfterViewInit(){
    // this.openModal()
  }

  closeModal(){
    this.modaleditAcountInformation.hide();
  }
  chooseTypePrice(typePrice:any){
    this.typePrice=typePrice;
  }

  updateAccount(){
    this.isLoading=true;
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
    });

    let options = { headers: reqHeader };

    this.http.post(this.global.url+'/auth/edit_account', this.account,options).subscribe(
      (response) => {
        let data:any=response;
        console.log('edit', response);
        this.closeModal()
        this.isLoading=false;
      },
      (error) => {
        this.isLoading=false;
      }
    );

  }
}
