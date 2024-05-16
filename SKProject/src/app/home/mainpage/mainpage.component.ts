import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class MainpageComponent {

  message:string ="Welocme to karma Community"

}
