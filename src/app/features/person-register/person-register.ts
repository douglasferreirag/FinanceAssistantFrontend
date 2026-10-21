import { FormsModule, NgForm } from "@angular/forms";
import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { Footer } from "../../layouts/footer/footer.js";
import { PersonRegisterHeader } from "../../layouts/headers/person-register-header/person-register-header.js";
import { PersonRegisterBodyComponent } from "../../layouts/bodies/person-register-body/person-register-body.js";
import { NavigationService } from "../../utils/NavigationService.js";
import { PersonRequest } from "../../dtos/requests/person-request.js";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-person-register',
  imports: [
    FormsModule,
    Footer,
    PersonRegisterHeader,
    PersonRegisterBodyComponent,

  ],
  templateUrl: './person-register.html',
  styleUrls: ['./person-register.scss'],
})
export class PersonRegisterComponent {
  // Estado inicial do objeto
  person: PersonRequest = { 'name': '' };

  @ViewChild(PersonRegisterBodyComponent) categoryBody!: PersonRegisterBodyComponent;
  @ViewChild('personForm') personForm!: NgForm;

  @Output() closed = new EventEmitter<void>();


  constructor(
    public navigation: NavigationService,
    private readonly http: HttpClient   
  ) {}

  canSubmit = false;

  // Pai monta o payload simples
  onSubmit(): void {
    if (!this.person.name || this.person.name.trim() === '') {
      alert("⚠️ O nome não pode estar vazio");
      return;
    }

    // Usa diretamente this.person como payload
    this.person.name = this.person.name.trim();


    this.http.post<PersonRequest>('http://localhost:8080/api/persons/save', this.person).subscribe({
      next: (res: PersonRequest) => {
        alert(`✅ Pessoa cadastrada com sucesso: ${res.name || 'OK'}`);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar pessoa.");
      }
    });
  }
  onClear(): void {
    this.person = { name: '' };
  }

  goHome(): void {
    this.navigation.goTo('');
  }
}
