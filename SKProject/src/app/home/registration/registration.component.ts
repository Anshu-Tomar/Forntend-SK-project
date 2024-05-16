import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePassword } from '../validate-password';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, 
    FormsModule, // <-- Add FormsModule here if you're using template-driven forms
    ReactiveFormsModule, // <-- Add ReactiveFormsModule here if you're using reactive forms
    CommonModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{
  message:string = "Registration"
  submitted = false;
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    fatherName: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    adharCardNumber: new FormControl(''),
    penCardNumber: new FormControl(''),
    phoneNumber: new FormControl(''),
    nomineName: new FormControl(''),
    nominedob: new FormControl(''),
    nominePhoneNumber: new FormControl(''),
    bankAccountNumber: new FormControl(''),
    bankAccountHolder: new FormControl(''),
    bankName: new FormControl(''),
    ifscCode: new FormControl(''),
    branchName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    sponserId: new FormControl('')
  });
  ishiddenFlg:boolean = false;
  
  constructor(
    public fb: FormBuilder,
    private router:Router,
    private _http:HttpClient
  ) {}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName:['',Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      gender: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      adharCardNumber: ['', [Validators.required]],
      penCardNumber: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      nomineName: ['', [Validators.required]],
      nominedob: ['', [Validators.required]],
      nominePhoneNumber: ['', [Validators.required]],
      bankAccountNumber: ['', [Validators.required]],
      bankAccountHolder: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
      branchName: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required,ValidatePassword.MatchPassword]],
      sponserId:['',Validators.required]
    }) 
  }



  // Getter method to access formcontrols
  get myForm() {
    return this.registrationForm.controls;
  }
  

  // Submit Registration Form
  onSubmit() {
    debugger
    this.submitted = true;
    if(this.registrationForm.invalid) {
      return 
    } else {
      console.log(this.registrationForm.value);
      let registrationUser ={
        username: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
      }
      this._http.post('http://127.0.0.1:8000/api/api/register/',registrationUser).subscribe(
        data => {
           alert("Data Successfully save")
        },
        error => {
            alert("this")
            return
        });
      this._http.post('http://127.0.0.1:8000/api/api/MemberList',this.registrationForm.value).subscribe(
        data => {
           this.router.navigate(['/']);
          // this.ishiddenFlg = true
        },
        error => {
            // this.error = error;
            // this.loading = false;
        });;
      //this.router.navigate(['/']);
    }
  }

  onReset(){
    this.registrationForm.reset();
  }
}

