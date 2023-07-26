import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { DonationsComponent } from './donations/donations.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { DetailProfessionalComponent } from './detail-professional/detail-professional.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'event', component: EventComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'professional/:id', component: DetailProfessionalComponent },
  { path: 'service/:id', component: DetailServiceComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: 'account', component: AccountComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
