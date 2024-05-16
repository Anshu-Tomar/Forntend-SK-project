import { Component } from '@angular/core';
import { HeaderComponent } from "../../home/header/header.component";
import { FooterComponent } from "../../home/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent {
  message:string = "Welcome to Anshu";
  isUserFlag:boolean = true;

}
