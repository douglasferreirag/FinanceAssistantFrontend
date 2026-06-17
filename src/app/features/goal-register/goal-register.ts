import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';


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
    limit_value: 0,

  };

  categories: any[] = []; // lista de categorias carregadas do backend

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient,
               public navigation: NavigationService
  ) {}


  onSubmit() {


    const goalPayload = {
      month: this.goal.month,
      year: this.goal.year,
      limit_value: this.goal.limit_value,

    };

    alert(JSON.stringify(goalPayload));

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





}
