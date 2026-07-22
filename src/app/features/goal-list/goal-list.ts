import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Goal } from '../../models/goal.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { GoalListBody } from "../../layouts/bodies/goal-list-body/goal-list-body";
import { GoalListHeader } from '../../layouts/headers/goal-list-header/goal-list-header';




@Component({
  selector: 'app-goal-list',
  imports: [CommonModule, Footer, GoalListHeader, GoalListBody, ],
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss',
})
export class GoalListComponent  {

   goals: Goal[] = [];
   loading = false;

  constructor(private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}


  goals$!: Observable<Goal[]>;

  // Método 1: busca os dados no backend
  importGoals(): void {
          this.http.get<Goal[]>('http://localhost:8080/api/goals/findAll')
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
