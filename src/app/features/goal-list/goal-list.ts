import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../utils/NavigationService.js';
import { Footer } from "../../layouts/footer/footer.js";
import { GoalListBody } from "../../layouts/bodies/goal-list-body/goal-list-body.js";
import { GoalListHeader } from '../../layouts/headers/goal-list-header/goal-list-header.js';
import { GoalResponse } from '../../dtos/responses/goal-response.js';




@Component({
  selector: 'app-goal-list',
  imports: [CommonModule, Footer, GoalListHeader, GoalListBody, ],
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss',
})
export class GoalListComponent  {

   goals: GoalResponse[] = [];
   loading = false;

  constructor(private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}



  // Método 1: busca os dados no backend
  importGoals(): void {
          this.http.get<GoalResponse[]>('http://localhost:8080/api/goals/findAll')
            .subscribe({
              next: (res) => {
                // atribui um novo array, não muta o existente
                this.goals = [...res];
                console.log('Metas importadas:', this.goals);
                this.cdr.detectChanges(); // ✅ força atualização imediata
                this.loading = false;
              },
              error: (err) => {
                if (err.name === 'AbortError') {
                  console.log('⚠️ Requisição cancelada (AbortError), sem impacto.');
                } else {
                  console.log('Erro ao importar metas', err);
                }
                this.loading = false;
                this.goals = [];
              }
            });

    }

    onRenderGoals() {
      this.importGoals();

    }

  goHome() {
    this.navigation.goTo('');
  }

}
