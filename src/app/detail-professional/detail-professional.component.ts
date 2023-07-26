import { Component,ViewChild,ElementRef } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Swiper, Virtual,SwiperOptions } from 'swiper';
@Component({
  selector: 'app-detail-professional',
  templateUrl: './detail-professional.component.html',
  styleUrls: ['./detail-professional.component.scss']
})
export class DetailProfessionalComponent {
  @ViewChild('swiperExplore', { static: false }) swiperExplore:any= SwiperComponent;
  swiperExploreConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30
      },
    }
  };

  dateArray:any=[];
  constructor(){

  }

  nextExplore(){
    this.swiperExplore.swiperRef.slideNext(100);
  }
  prevExplore(){
    this.swiperExplore.swiperRef.slidePrev(100);
  }

  ngOnInit(){
    this.dateInit();
  }

  dateInit(){
    const today = new Date();
    const next14Days = [];
    for (let i = 0; i < 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][nextDate.getDay()];
      const fullDate = `${nextDate.getDate()} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][nextDate.getMonth()]} ${nextDate.getFullYear()}`;

      next14Days.push({
        date: nextDate.getDate(),
        day: dayOfWeek,
        fullDate: fullDate,
      });
    }

    this.dateArray=next14Days
    console.log(next14Days);
  }
}
