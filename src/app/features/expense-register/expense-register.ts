import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { ExpenseRegisterHeaderComponent } from "../../layouts/headers/expense-register-header/expense-register-header";
import { ExpenseRegisterBodyComponent } from "../../layouts/bodies/expense-register-body/expense-register-body";

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule, Footer, ExpenseRegisterHeaderComponent, ExpenseRegisterBodyComponent],
  templateUrl: './expense-register.component.html',
  styleUrls: ['./expense-register.component.scss']
})
export class ExpenseRegisterComponent {

  expense: Expense = {
    description: '',
    cost: 0,
    expenseDate: new Date().toISOString().split('T')[0], // formato YYYY-MM-DD,
    category: { id: 0, name: '' }
  };

  @ViewChild(ExpenseRegisterBodyComponent) expenseBody!: ExpenseRegisterBodyComponent;
  @ViewChild('expenseForm') expenseForm!: NgForm

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient,
              public navigation: NavigationService) {}

  onSubmit(expenseForm: any) {
    const categoryPayload = { name: this.expense.category.name };
    const expensePayload = {
      description: this.expense.description,
      cost: this.expense.cost,
      expenseDate: this.expense.expenseDate,
      category: this.expense.category
    };

    this.http.post<any>('http://localhost:8080/api/categories/save', categoryPayload).subscribe({
      next: (catRes) => {
        console.log('Categoria verificada/cadastrada:', catRes);

        this.http.post<any>('http://localhost:8080/api/expenses/save', expensePayload).subscribe({
          next: (res) => {
            alert(`✅ Gasto cadastrado com sucesso: ${res.reply || 'OK'}`);
            this.onClear(); // limpa após salvar
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

  onClear() {
    // basta redefinir o objeto, os inputs limpam via ngModel
    this.expense =  {
        description: '',
        cost: 0,
        expenseDate: new Date().toISOString().split('T')[0], // formato YYYY-MM-DD,
        category: { id: 0, name: '' }
    };


  }

  goHome() {
    this.navigation.goTo('');
  }
}
