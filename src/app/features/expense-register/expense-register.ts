import { Component, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { ExpenseRegisterHeaderComponent } from "../../layouts/headers/expense-register-header/expense-register-header";
import { ExpenseRegisterBodyComponent } from "../../layouts/bodies/expense-register-body/expense-register-body";
import { Category } from '../../models/category.model';

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
    expenseDate: new Date(),
    category: { id: 0, name: '' }
  };

  @ViewChild(ExpenseRegisterBodyComponent) expenseBody!: ExpenseRegisterBodyComponent;

  @Output() closed = new EventEmitter<void>();

  categoriesName: string[] = [];
  loading = false;
  category: Category = { id: 0, name: '' };

  constructor(private http: HttpClient,
              public navigation: NavigationService,
              private cdr: ChangeDetectorRef) {}

  // 🔹 Agora o pai recebe o form do body
  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert("⚠️ Preencha todos os campos obrigatórios antes de salvar.");
      return;
    }

    const expensePayload = {
      description: this.expense.description,
      cost: this.expense.cost,
      expenseDate: this.expense.expenseDate,
      category: this.category
    };

    this.http.post<any>('http://localhost:8080/api/expenses/save', expensePayload).subscribe({
      next: (res) => {
        alert(`✅ Gasto cadastrado com sucesso: ${res.reply || 'OK'}`);
      },
      error: (err) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar gasto.");
      }
    });
  }

  onClear() {
    this.expense = {
      description: '',
      cost: 0,
      expenseDate: new Date(),
      category: { id: 0, name: '' }
    };
    this.categoriesName = [];
  }

  onCategorySelected(name: string) {
    this.getCategoryByName(name);
  }

  goHome() {
    this.navigation.goTo('');
  }

  getCategoryByName(name: string): void {
    this.http.get<Category>(`http://localhost:8080/api/categories/findByName/${name}`)
      .subscribe({
        next: (res) => {
          this.category = res;
        },
        error: (err) => {
          console.error('Erro ao buscar categoria por nome', err);
          alert("⚠️ Categoria não encontrada.");
          this.category = { id: 0, name: '' };
        }
      });
  }

  onImportCategories(): void {
    this.http.get<string[]>('http://localhost:8080/api/categories/names')
      .subscribe({
        next: (res) => {
          this.categoriesName = [...res];
          this.cdr.detectChanges();
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro ao importar categorias', err);
          this.loading = false;
          this.categoriesName = [];
        }
      });
  }
}
