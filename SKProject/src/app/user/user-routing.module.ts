import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestWithDrawComponent } from './request-with-draw/request-with-draw.component';
import { ContactUsComponent } from '../home/contact-us/contact-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'requestWithDraw', component:RequestWithDrawComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
