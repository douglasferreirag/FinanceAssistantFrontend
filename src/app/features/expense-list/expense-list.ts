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
  importExpenses(): void {
        this.http.get<Expense[]>('http://localhost:8080/api/expenses/findAll')
          .subscribe({
            next: (res) => {
              // atribui um novo array, não muta o existente
              this.expenses = [...res];
              console.log('Gastos importados:', this.expenses);
              this.cdr.detectChanges(); // ✅ força atualização imediata
              this.loading = false;
            },
            error: (err) => {
              if (err.name === 'AbortError') {
                console.log('⚠️ Requisição cancelada (AbortError), sem impacto.');
              } else {
                console.log('Erro ao importar gastos', err);
              }
              this.loading = false;
              this.expenses = [];
            }
          });

  }



  exportTable(): void {
    this.http.get<Expense[]>('http://localhost:8080/api/expenses/findAll')
      .subscribe({
        next: (res) => {
          // Cabeçalho
          const header = ["Descrição", "Data", "Valor"];

          // Linhas de dados
          const rows = res.map(expense => {
            const descricao = expense.description ?? "";
            const data = new Date(expense.expenseDate).toLocaleDateString("pt-BR");
            const valor = (expense.cost ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            });
            return [descricao, data, valor];
          });

          // Monta o CSV célula a célula
          let csvContent = "";
          csvContent += header.join(";") + "\n"; // separador ; para abrir direto no Excel BR
          rows.forEach(row => {
            csvContent += row.join(";") + "\n";
          });

          // Cria o blob
          const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
          const url = URL.createObjectURL(blob);

          // Cria o link para download
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "data/gastos_exportados.csv");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          console.log("✅ Exportação concluída!");
        },
        error: (err) => {
          console.error("Erro ao exportar gastos", err);
        }
      });
  }


  onRenderExpenses() {
    this.importExpenses();

  }

  goHome() {
    this.navigation.goTo('');
  }
}
