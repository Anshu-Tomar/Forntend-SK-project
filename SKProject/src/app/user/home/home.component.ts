import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../home/header/header.component";
import { FooterComponent } from "../../home/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { testService } from '../../service/testservice.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent,CommonModule]
})
export class HomeComponent implements OnInit{
  message:string = "";
  isUserFlag:boolean = true;
  IsData:any;
  isChildData:any;
  IdValue:any;
  isUserData:any;
  name:string ='';
  constructor( private _http:HttpClient, private service:testService ){}
  ngOnInit(): void {
    debugger
    this.isUserData = sessionStorage.getItem('userdata') ;
    this.isUserData = JSON.parse(this.isUserData )
    this.name = this.isUserData.name;
      this.message = "Welcome to " + this.name
      this._http.get(`http://54.158.23.217:8080/onboard/${this.isUserData.id}/downline`).subscribe(
        data => {
          debugger
          this.IsData= data
          // this.ishiddenFlg = true
        },
        error => {
            // this.error = error;
            // this.loading = false;
        });
    this.service.activeCard$.subscribe(message => {this.isUserData= message;
      
     
    });
    
  }

  userData(id:number){
    this.IdValue = id;
    this._http.get(`http://54.158.23.217:8080/onboard/${id}/downline`).subscribe(
      data => {
        debugger
        this.isChildData= data
        // this.ishiddenFlg = true
      },
      error => {
          // this.error = error;
          // this.loading = false;
      });;
  }
  
}
