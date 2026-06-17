import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal-form',
  standalone: true,
  imports: [FormsModule],   // ✅ necessário para ngModel
  templateUrl: './goal-register.component.html',
  styleUrls: ['./goal-register.component.scss']
})
export class GoalRegisterComponent {

  goal = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    limitValue: 0,

  };

  categories: any[] = []; // lista de categorias carregadas do backend

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient, private router: Router) {}


  onSubmit() {


    const goalPayload = {
      month: this.goal.month,
      year: this.goal.year,
      limitValue: this.goal.limitValue,

    };

    this.http.post<any>('http://localhost:8080/api/goals/save', goalPayload).subscribe({
        next: (res) => {
          alert(`✅ Meta cadastrada com sucesso: ${res.description || 'OK'}`);
          this.resetForm();
          this.router.navigate(['/goals']);
        },
        error: (err) => {
          console.error(err);
          alert("⚠️ Erro ao cadastrar meta.");
        }
      });
    }


  resetForm() {
    this.goal = {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      limitValue: 0,

    };
  }

 
}
