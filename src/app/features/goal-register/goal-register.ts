import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { GoalRegisterBodyComponent } from "../../layouts/bodies/goal-register-body/goal-register-body.component";
import { GoalRegisterHeaderComponent } from "../../layouts/headers/goal-register-header/goal-register-header";

@Component({
  selector: 'app-goal-form',
  standalone: true,
  imports: [FormsModule, Footer, GoalRegisterBodyComponent, GoalRegisterHeaderComponent],
  templateUrl: './goal-register.component.html',
  styleUrls: ['./goal-register.component.scss']
})
export class GoalRegisterComponent {

  @ViewChild(GoalRegisterBodyComponent) goalBody!: GoalRegisterBodyComponent;

  goal = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    ceiling: 0
  };

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  onSubmit(form: NgForm | any) {
    // ✅ agora só validamos ceiling > 0
    if (this.goal.ceiling <= 0) {
      alert("⚠️ O valor limite deve ser maior que zero.");
      return;
    }

    const goalPayload = {
      month: this.goal.month,
      year: this.goal.year,
      ceiling: this.goal.ceiling
    };

    this.http.post<any>('http://localhost:8080/api/goals/save', goalPayload).subscribe({
      next: (res) => {
        alert(`✅ Meta cadastrada com sucesso: ${res.description || 'OK'}`);
      },
      error: (err) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar meta.");
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
