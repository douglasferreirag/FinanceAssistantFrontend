import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../utils/NavigationService.js';
import { Footer } from "../../layouts/footer/footer.js";
import { ExpenseListBodyComponent } from "../../layouts/bodies/expense-list-body/expense-list-body.js";
import { ExpenseListHeaderComponent } from "../../layouts/headers/expense-list-header/expense-list-header.js";
import { ExpenseResponse } from '../../dtos/responses/expense-response.js';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, Footer, ExpenseListBodyComponent, ExpenseListHeaderComponent],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.scss'],
})
export class ExpenseListComponent {
  expenses: ExpenseResponse[] = [];
  loading = false;

  constructor(
    private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}

  // Método 1: busca os dados no backend
  importExpenses(): void {
        this.http.get<ExpenseResponse[]>('http://localhost:8080/api/expenses/findAllWithCategoryAndPerson')
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
    this.http
      .get<ExpenseResponse[]>(
        'http://localhost:8080/api/expenses/findAllWithCategoryAndPerson'
      )
      .subscribe({
        next: (expenses) => {

          const header = [
            "Descrição",
            "Data",
            "Valor",
            "Categoria",
            "Pessoa"
          ];

          const rows = expenses.map(expense => [
            expense.description ?? "",
            expense.expenseDate
              ? new Date(expense.expenseDate).toLocaleDateString("pt-BR")
              : "",
            Number(expense.cost ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            }),
            expense.categoryName ?? "",
            expense.personName ?? ""
          ]);

          const csvContent = [
            header.join(";"),
            ...rows.map(row => row.join(";"))
          ].join("\n");

          const blob = new Blob(
            ["\uFEFF" + csvContent],
            {
              type: "text/csv;charset=utf-8;"
            }
          );

          const url = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = "gastos_exportados.csv";

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          console.log("✅ Arquivo exportado com sucesso!");
        },
        error: (error) => {
          console.error("❌ Erro ao exportar gastos:", error);
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
