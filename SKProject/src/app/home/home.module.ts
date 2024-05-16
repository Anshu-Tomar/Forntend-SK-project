import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LoginComponent } from "./login/login.component";
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from "angular-archwizard";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    ContactUsComponent,
    LoginComponent,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
