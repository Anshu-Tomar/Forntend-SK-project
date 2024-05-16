import { Component } from '@angular/core';
import { HeaderComponent } from "../../home/header/header.component";
import { FooterComponent } from "../../home/footer/footer.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatePassword } from '../../home/validate-password';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-request-with-draw',
    standalone: true,
    templateUrl: './request-with-draw.component.html',
    styleUrl: './request-with-draw.component.scss',
    imports: [HeaderComponent, FooterComponent, 
      FormsModule, // <-- Add FormsModule here if you're using template-driven forms
      ReactiveFormsModule, // <-- Add ReactiveFormsModule here if you're using reactive forms
      CommonModule ],
})
export class RequestWithDrawComponent {
  message:string ="Request for withdraw";
  isUserFlag:boolean = true;
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
