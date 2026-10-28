import { ChangeDetectorRef, Component } from '@angular/core';
import { Footer } from "../../layouts/footer/footer.js";
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService.js';
import { PersonListHeader } from "../../layouts/headers/person-list-header/person-list-header.js";
import { PersonListBody } from "../../layouts/bodies/person-list-body/person-list-body.js";
import { PersonResponse } from '../../dtos/responses/person-response.js';

@Component({
  selector: 'app-person-list',
  imports: [Footer, PersonListHeader, PersonListBody],
  templateUrl: './person-list.html',
  styleUrl: './person-list.scss',
})
export class PersonListComponent {
  persons: PersonResponse[] = [];
  loading = false;

  constructor(
    private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}

  // Método: busca os dados no backend
  importPersons(): void {
    this.http.get<PersonResponse[]>('http://localhost:8080/api/persons/findAll')
      .subscribe({
        next: (res) => {
          // atribui um novo array, não muta o existente
          this.persons = [...res];
          console.log('Pessoas importadas:', this.persons);
          this.cdr.detectChanges(); // ✅ força atualização imediata
          this.loading = false;
        },
        error: (err) => {
          if (err.name === 'AbortError') {
            console.log('⚠️ Requisição cancelada (AbortError), sem impacto.');
          } else {
            console.log('Erro ao importar pessoas', err);
          }
          this.loading = false;
          this.persons = [];
        }
      });
  }

  onRenderPersons() {
    this.importPersons();
  }

  goHome() {
    this.navigation.goTo('');
  }
}
