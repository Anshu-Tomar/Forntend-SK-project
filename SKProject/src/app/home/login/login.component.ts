import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from "../header/header.component";
import { testService } from '../../service/testservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup ;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;
  error = 'login Failed';
    isloginData:any;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private http:HttpClient,
      private service:testService
  ) { 
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          id: [ Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
     //this.loginForm.controls['username'].setValue(parseInt(this.loginForm.controls['username'].value))
      //http://54.158.23.217:8080/onboard/test
      this.loading = true;
      this.http.post('http://54.158.23.217:8080/login',this.loginForm.value)
          .subscribe(
              data => {
                  this.isloginData=data;
                  let userData = {
                    name:this.isloginData.data.name,
                    id:this.isloginData.data.id
                  }
                  sessionStorage.setItem('userdata', JSON.stringify(userData))
                  this.router.navigate(['user']);

              },
              error => {
                  this.error = error;
                  this.loading = false;
              });

     // this.router.navigate(['user']);
  }
}
