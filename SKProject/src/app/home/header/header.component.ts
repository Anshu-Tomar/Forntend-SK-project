import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { testService } from '../../service/testservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input()
  message!: string;
  @Input() isUserFlag!:boolean;
  isUserData:any;
  name:string='';
  constructor(private router:Router, private http:HttpClient , private service:testService){}
  ngOnInit(): void {
    this.isUserData = sessionStorage.getItem('userdata') ;
    this.isUserData = JSON.parse(this.isUserData )
    this.name =this.isUserData.name
    
  }
  
  logout(){
    sessionStorage.removeItem('userdata');
    this.http.post('http://54.158.23.217:8080/logout', null)
          .subscribe(
              data => {
                  this.router.navigate(['/']);
              },
              error => {
                  // this.error = error;
                  // this.loading = false;
              });
    this.router.navigate([''])
  }
}
