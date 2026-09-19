import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Footer } from '../../layouts/footer/footer';
import { PersonRegisterHeader } from '../../layouts/headers/person-register-header/person-register-header';
import { PersonRegisterBody } from '../../layouts/bodies/person-register-body/person-register-body';
import { FormsModule,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-register',
  imports: [FormsModule, Footer, PersonRegisterHeader, PersonRegisterBody],
  templateUrl: './person-register.html',
  styleUrl: './person-register.scss',
})
export class PersonRegisterComponent {

  person: Person = {
       id: 0,
       name: ''
    };
  
    @ViewChild(PersonRegisterBody) personBody!: PersonRegisterBody;
    @ViewChild('personForm') personForm!: NgForm;
    @Output() closed = new EventEmitter<void>();
  
    constructor(private http: HttpClient, public navigation: NavigationService) {}
  
    canSubmit = false;
  
  
    onSubmit(event: any) {
  
      const personPayload = { name: this.person.name };
  
      this.http.post<any>('http://localhost:8080/api/persons/save', personPayload).subscribe({
        next: (personRes) => {
          console.log('✅ Pessoa verificada/cadastrada:', personRes);
          alert(`Pessoa cadastrada com sucesso: ${personRes.reply || 'OK'}`);
  
        },
        error: (err) => {
          console.error(err);
          alert("⚠️ Erro ao cadastrar pessoa.");
        }
      });
    }
  
  
    onClear(): void {
      this.person = {
        id: 0,
        name: ''
      };
    }
  
    goHome(): void {
      this.navigation.goTo('');
    }

}
