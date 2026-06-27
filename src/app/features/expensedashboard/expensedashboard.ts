import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { NavigationService } from '../../utils/NavigationService';

// Registrar todos os componentes necessários
Chart.register(...registerables);

@Component({
  selector: 'app-expensedashboard',
  templateUrl: './expensedashboard.component.html'
})
export class ExpenseDashboardComponent {
  private apiUrl = 'http://localhost:8080/api/expense-dashboard';

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  generateDashboard() {
    this.http.get<{[key: string]: number}>(`${this.apiUrl}/expenses-by-category`)
      .subscribe(data => {
        const categories = Object.keys(data);
        const values = Object.values(data);

        new Chart('expensesChart', {
          type: 'bar', // agora funciona porque o controller foi registrado
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
            plugins: {
              legend: { display: false }
            }
          }
        });
      });
  }
}
