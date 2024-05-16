import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { GoogleMapsModule } from '@angular/google-maps'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,GoogleMapsModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  message:string = "Contact Us"
  display: any;
    center: google.maps.LatLngLiteral = {
        lat: 29.447969,
        lng: 77.310591
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
    form!: FormGroup;

    ngOnInit(): void {
      this.buildForm();
    }
  
    constructor(private formBuilder: FormBuilder) {}
  
    send(): void {
      const { name, email, message } = this.form.value;
      alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
    }
  
    private buildForm(): void {
      this.form = this.formBuilder.group({
        name: this.formBuilder.control(null),
        email: this.formBuilder.control(null),
        message: this.formBuilder.control(null),
      });
    }
}
