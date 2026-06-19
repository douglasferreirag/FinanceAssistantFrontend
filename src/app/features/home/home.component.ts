import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../utils/NavigationService';


@Component({
  selector: 'app-home',
  standalone: true, // ✅ standalone component
  imports: [ FormsModule], // ✅ habilita ngIf, ngFor e ngModel
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
          messages: { from: string, text: string }[] = [];
          userInput: string = '';


          constructor(public navigation: NavigationService) {}

          openSection: string | null = null;

          toggleSection(section: string) {
            this.openSection = this.openSection === section ? null : section;
          }



          processConversation() {
            this.messages.push({ from: 'user', text: this.userInput });
            this.userInput = '';
          }




}
