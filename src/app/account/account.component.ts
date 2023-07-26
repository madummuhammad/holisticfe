import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  tab:any='profile'
  tabTo(to:any){
    console.log(to)
    this.tab=to;
  }
}
