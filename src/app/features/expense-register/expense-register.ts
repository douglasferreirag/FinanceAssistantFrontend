import { SpeechService } from '../../utils/SpeechService';
import { Component, Output, EventEmitter } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';





@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule],   // ✅ necessário para ngModel
  templateUrl: './expense-register.component.html',
  styleUrls: ['./expense-register.component.scss']
})



export class ExpenseRegisterComponent {


  expense: Expense = {
    description: '', cost: 0, expenseDate: '', category: { id: 0, name: '' }
  };

  textoFalado = ''

  // evento para avisar o chat quando terminar
  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient,
              public navigation: NavigationService
              ) {}


  onSubmit() {
    const categoryPayload = { name: this.expense.category.name };
    const expensePayload = {
      description: this.expense.description,
      cost: this.expense.cost,
      expenseDate: this.expense.expenseDate,
      category: this.expense.category
    };

    // 1. Cadastra/verifica categoria
    this.http.post<any>('http://localhost:8080/api/categories/save', categoryPayload).subscribe({
      next: (catRes) => {
        console.log('Categoria verificada/cadastrada:', catRes);

        // 2. Só depois cadastra o gasto
        this.http.post<any>('http://localhost:8080/api/expenses/save', expensePayload).subscribe({
          next: (res) => {
            alert(`✅ Gasto cadastrado com sucesso: ${res.reply || 'OK'}`);
            this.expense = { description: '', cost: 0, expenseDate: '', category: { id: 0, name: '' } };

          },
          error: (err) => {
            console.error(err);
            alert("⚠️ Erro ao cadastrar gasto.");
          }
        });
      },
      error: (err) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar categoria.");
      }
    });


  }





}
