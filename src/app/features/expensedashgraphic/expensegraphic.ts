import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartType, registerables } from 'chart.js';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layout/footer/footer";

// Registrar todos os componentes necessários
Chart.register(...registerables);

@Component({
  selector: 'app-expensegraphic',
  templateUrl: './expensegraphic.component.html',
  styleUrls: ['./expensegraphic.scss'],
  imports: [Footer]
})
export class ExpenseGraphicComponent {
  private apiUrl = 'http://localhost:8080/api/expense-graphic';
  private chart: Chart | null = null; // guarda a instância atual

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  generateGraphic(typegraphic: ChartType): void {
    this.http.get<{[key: string]: number}>(`${this.apiUrl}/expenses-by-category`)
      .subscribe(data => {
        const categories = Object.keys(data);
        const values = Object.values(data);

        // Se já existe um gráfico, destrói antes de criar outro
        if (this.chart) {
          this.chart.destroy();
        }

        this.chart = new Chart('expensesChart', {
          type: typegraphic,
          data: {
            labels: categories,
            datasets: [{
              label: 'Gastos por Categoria',
              data: values,
              backgroundColor: ['#0078d7', '#ffcc00', '#00b294', '#e81123']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: typegraphic !== 'bar' } // legenda só em pizza/linha
            }
          }
        });
      });
  }
}
