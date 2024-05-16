import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';

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
  constructor(private router:Router, private http:HttpClient){}
  ngOnInit(): void {
  }
  
  logout(){
    //localStorage.removeItem('seller');
    this.http.post('http://127.0.0.1:8000/api/api/logoutall', null)
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
