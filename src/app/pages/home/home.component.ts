import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { HomeComponentBody } from '../../layouts/bodies/home-component-body/home-component-body';
import { HomeComponentHeader } from '../../layouts/headers/home-component-header/home-component-header';



@Component({
  selector: 'app-home',
  standalone: true, // ✅ standalone component
  imports: [FormsModule, Footer, HomeComponentBody, HomeComponentHeader], // ✅ habilita ngIf, ngFor e ngModel
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


          constructor(public navigation: NavigationService) {}


          onNavigate(route: string) {
             this.navigation.goTo(route);
          }






}
