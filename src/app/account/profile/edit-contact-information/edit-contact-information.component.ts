import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,ViewChild,ElementRef,Input } from '@angular/core';
import { Modal } from 'flowbite'
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-edit-contact-information',
  templateUrl: './edit-contact-information.component.html',
  styleUrls: ['./edit-contact-information.component.scss']
})
export class EditContactInformationComponent {
  @ViewChild('editAcountInformation', { static: false }) editAcountInformation:any= ElementRef;
  @Input('account') account:any;
  modaleditAcountInformation:any;
  typePrice:any='free';
  isLoading:any=false;
  province:any=[];
  city:any=[];
  constructor(
    private http:HttpClient,
    private global:GlobalService
    ){

  }

  ngOnInit(){
    console.log(this.account)
    this.getProvine();
  }
  openModal() {
    console.log(this.editAcountInformation)
    this.modaleditAcountInformation = new Modal(this.editAcountInformation.nativeElement);
    this.modaleditAcountInformation.show();
  }

  ngAfterViewInit(){
    // this.openModal()
  }

  chooseCountry(country:any){
    this.account.country=country
  }

  closeModal(){
    this.modaleditAcountInformation.hide();
  }

chooseTypePrice(typePrice:any){
  this.typePrice=typePrice;
}

  getProvine()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/place/province', options)
      .subscribe(response => {

      let data: any = response;
      console.log('province',response);
      this.province=data.rajaongkir.results;
      console.log('result',this.province)
      if(this.account.province){
        this.getCity();
      }
      this.isLoading=false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  provinceChange(){
    this.getCity();
  }

  getCity()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/place/city?province_id='+this.account.province.split('|')[0], options)
      .subscribe(response => {

      let data: any = response;
      console.log('city',response);
      this.city=data.rajaongkir.results;
      console.log('city result',this.city)
      this.isLoading=false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
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
