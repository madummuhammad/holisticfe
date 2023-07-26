import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { SecondaryHeaderComponent } from './shared/secondary-header/secondary-header.component';
import { ServiceFacetofaceComponent } from './service/service-facetoface/service-facetoface.component';
import { ServiceOnlineComponent } from './service/service-online/service-online.component';
import { ServiceStoreComponent } from './service/service-store/service-store.component';
import { LoginModalComponent } from './shared/login-modal/login-modal.component';
import { RegisterModalComponent } from './shared/register-modal/register-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './account/profile/profile.component';
import { AccountComponent } from './account/account.component';
import { AccountServiceComponent } from './account/account-service/account-service.component';
import { CreateServiceComponent } from './account/account-service/create-service/create-service.component';
import { EditAccountInformationComponent } from './account/profile/edit-account-information/edit-account-information.component';
import { EditContactInformationComponent } from './account/profile/edit-contact-information/edit-contact-information.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditServiceComponent } from './account/account-service/edit-service/edit-service.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { DonationsComponent } from './donations/donations.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { DetailProfessionalComponent } from './detail-professional/detail-professional.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { AccountProductComponent } from './account/account-product/account-product.component';
import { CreateProductComponent } from './account/account-product/create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    SecondaryHeaderComponent,
    ServiceFacetofaceComponent,
    ServiceOnlineComponent,
    ServiceStoreComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ProfileComponent,
    AccountComponent,
    AccountServiceComponent,
    CreateServiceComponent,
    EditAccountInformationComponent,
    EditContactInformationComponent,
    AboutUsComponent,
    FaqComponent,
    ContactUsComponent,
    EditServiceComponent,
    ServiceDetailComponent,
    DonationsComponent,
    PrivacyPolicyComponent,
    DetailServiceComponent,
    DetailProfessionalComponent,
    EventComponent,
    EventDetailComponent,
    AccountProductComponent,
    CreateProductComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
