import { Component } from '@angular/core';
import { FooterComponent } from "../home/footer/footer.component";

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
    imports: [FooterComponent]
})
export class PageNotFoundComponent {

}
