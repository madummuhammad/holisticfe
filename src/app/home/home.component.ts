import { Component,ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Swiper, Virtual,SwiperOptions } from 'swiper';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global.service';

SwiperCore.use([Virtual]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('swiperExplore', { static: false }) swiperExplore:any= SwiperComponent;
  @ViewChild('swiperPracticioner', { static: false }) swiperPracticioner:any= SwiperComponent;
  @ViewChild('swiperProduct', { static: false }) swiperProduct:any= SwiperComponent;
  @ViewChild('swiperPromotion', { static: false }) swiperPromotion:any= SwiperComponent;
  @ViewChild('swiperFavorite', { static: false }) swiperFavorite:any= SwiperComponent;

  isLoading:any=false;
  isSearchMd:any=false;
  isSearch:any=true;
  isBlockSearch:any=false;

  serviceCategory:any=[];
  sliderHomepage:any=[];
  user:any=[];
  star:any=[];

  swiperExploreConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  };

  constructor(
    private http:HttpClient,
    private global:GlobalService
  ){

  }

  ngOnInit()
  {
    this.getServiceCategory();
    this.getSlideHomepage();
    this.getUser();
  }
  nextExplore(){
    this.swiperExplore.swiperRef.slideNext(100);
  }
  prevExplore(){
    this.swiperExplore.swiperRef.slidePrev(100);
  }

 swiperPracticionerConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  };
  nextPracticioner(){
    this.swiperPracticioner.swiperRef.slideNext(100);
  }
  prevPracticioner(){
    this.swiperPracticioner.swiperRef.slidePrev(100);
  }
 swiperProductConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  };
  nextProduct(){
    this.swiperProduct.swiperRef.slideNext(100);
  }
  prevProduct(){
    this.swiperProduct.swiperRef.slidePrev(100);
  }
  nextPromotion(){
    this.swiperPromotion.swiperRef.slideNext(100);
  }
  prevPromotion(){
    this.swiperPromotion.swiperRef.slidePrev(100);
  }

 swiperFavoritesConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  };
  nextFavorite(){
    this.swiperFavorite.swiperRef.slideNext(100);
  }
  prevFavorite(){
    this.swiperFavorite.swiperRef.slidePrev(100);
  }

  searchFocusMd()
  {
    this.isSearchMd=!this.isSearchMd;
  }
  searchFocus()
  {
    this.isSearch=!this.isSearch;
  }

  getServiceCategory()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/category/service', options)
      .subscribe(response => {

      let data: any = response;
      console.log(response);

      if(data.status == 'success')
      {
        this.serviceCategory=data.data;
      }
      else
      {
        // this.global.presentToast(data.message,'danger');
      }

      this.isLoading = false;

      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  getSlideHomepage()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/slider/homepage', options)
      .subscribe(response => {

      let data: any = response;
      console.log('slider',response);

      if(data.status == 'success')
      {
        this.sliderHomepage=data.data;
      }

      this.isLoading = false;

      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  getUser()
  {
    this.isLoading = true;

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+this.global.getToken()
     });

    let options = {headers: reqHeader};

    this.http.get(this.global.url+'/practicioner/new', options)
      .subscribe(response => {

      let data: any = response;
      console.log('user',response);
      this.user = data.data;
      this.user.forEach((item: any) => {
        item.stars = [];
        for (let i = 0; i < Math.floor(item.average_rating); i++) {
          item.stars.push(i);
        }
      });
      console.log(this.user);

      this.isLoading = false;

      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }
}
