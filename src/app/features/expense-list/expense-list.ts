import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { ExpenseListBodyComponent } from "../../layouts/bodies/expense-list-body/expense-list-body";
import { ExpenseListHeaderComponent } from "../../layouts/headers/expense-list-header/expense-list-header";

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, Footer, ExpenseListBodyComponent, ExpenseListHeaderComponent],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.scss'],
})
export class ExpenseListComponent {
  expenses: Expense[] = [];
  loading = false;

  constructor(
    private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}

  // Método 1: busca os dados no backend
  private fetchFromDatabase(): Promise<Expense[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Expense[]>('http://localhost:8080/api/expenses/findAll').subscribe({
        next: (res) => {
          console.log('Dados recebidos:', res);
          resolve(res);
        },
        error: (err) => {
          console.error('Erro ao buscar gastos', err);
          reject(err);
        }
      });
    });
  }

 renderExpenses(): void {
    if (this.loading) return; // evita múltiplos cliques
    this.loading = true;

    this.fetchFromDatabase()
      .then((data) => {
        this.expenses = data || [];
        this.loading = false;
      })
      .catch(() => {
        this.expenses = [];
        this.loading = false;
      });
  }

  exportTable() {
    if (!this.expenses || this.expenses.length === 0) {
      alert("⚠️ Nenhum dado para exportar.");
      return;
    }

    const header = "Descrição,Valor,Data,Categoria";
    const rows = this.expenses.map(e =>
      `${e.description},${e.cost},${e.expenseDate},${e.category.id || 'Sem categoria'}`
    );
    const csvContent = header + "\n" + rows.join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "expenses.csv";
    link.click();
  }

  goHome() {
    this.navigation.goTo('');
  }
}
