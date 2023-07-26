import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent{
  tab:any='face-to-face'
  tabTo(to:any){
    console.log(to)
    this.tab=to;
  }
}
