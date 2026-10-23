import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService.js';
import { Footer } from "../../layouts/footer/footer.js";
import { GoalRegisterBodyComponent } from "../../layouts/bodies/goal-register-body/goal-register-body.component.js";
import { GoalRegisterHeaderComponent } from "../../layouts/headers/goal-register-header/goal-register-header.js";
import { GoalRequest } from '../../dtos/requests/goal-request.js';
import { GoalResponse } from '../../dtos/responses/goal-response.js';

@Component({
  selector: 'app-goal-form',
  standalone: true,
  imports: [FormsModule, Footer, GoalRegisterBodyComponent, GoalRegisterHeaderComponent],
  templateUrl: './goal-register.component.html',
  styleUrls: ['./goal-register.component.scss']
})
export class GoalRegisterComponent {

  @ViewChild(GoalRegisterBodyComponent) goalBody!: GoalRegisterBodyComponent;
  @ViewChild('goalForm') goalForm!: NgForm;

  goal: GoalRequest = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    ceiling: 0
  };

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  onSubmit(): void {
    // validação simples
    if (!this.goal.month || !this.goal.year || !this.goal.ceiling) {
      alert("⚠️ Todos os campos da meta são obrigatórios");
      return;
    }

    const goalPayload: GoalRequest = {
      month: this.goal.month,
      year: this.goal.year,
      ceiling: this.goal.ceiling
    };

    this.http.post<GoalResponse>(
      "http://localhost:8080/api/goals/save",
      goalPayload
    ).subscribe({
      next: (res: GoalResponse) => {
        alert(`✅ Meta cadastrada com sucesso: mês ${res.month}/${res.year}, teto ${res.ceiling}`);
        this.onClear(); // limpa o formulário
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.message || "⚠️ Erro ao cadastrar meta.");
      }
    });
  }


  onClear() {
    if (this.goalBody.goalForm) {
      this.goalBody.onClear(this.goalBody.goalForm); // força reset do body
    }

    // ✅ volta para mês/ano atuais
    this.goal = {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      ceiling: 0
    };
  }

  goHome() {
    this.navigation.goTo('');
  }
}
