import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartType, registerables } from 'chart.js';
import { NavigationService } from '../../utils/NavigationService.js';
import { Footer } from "../../layouts/footer/footer.js";

import { DashBoardSummaryResponse } from '../../dtos/responses/dashboardsummary-response.js';
import { ExpenseDashboardSummaryHeaderComponent } from '../../layouts/headers/expense-dashboard-summary-header/expense-dashboard-summary-header.js';
import { ExpenseDashboardSummaryBodyComponent } from '../../layouts/bodies/expense-dashboard-summary-body/expense-dashboard-summary-body.js';



Chart.register(...registerables);

@Component({
  selector: 'app-expense-dashboard',
  standalone: true,
  templateUrl: './expense-dashboard-summary.component.html',
  styleUrls: ['./expense-dashboard-summary.scss'],
  imports: [Footer, ExpenseDashboardSummaryHeaderComponent, ExpenseDashboardSummaryBodyComponent]
})
export class ExpenseDashboardSummaryComponent {


  dashboard: DashBoardSummaryResponse = {
    totalExpenses: 0,
    highestExpense: 0,
    averageExpense: 0,
    totalRecords: 0
  };

  dashboardData: DashBoardSummaryResponse[] = [];



  categoryChart!: Chart;
  monthlyChart!: Chart;

  private chart: Chart | null = null; // guarda a instância atual

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  // 🔹 chamado pelo header
  onGoHome(): void {
    this.navigation.goTo('');
  }

  // 🔹 chamado pelo header
  onGenerateGraphic(typegraphic: ChartType): void {

    const apiUrl =
      'http://localhost:8080/api/expenses';

    this.http
      .get<DashBoardSummaryResponse>(
        `${apiUrl}/dashboardSummary`
      )
      .subscribe({

        next: (response) => {

          const labels = [
            'Total Gasto',
            'Maior Gasto',
            'Média',
            'Registros'
          ];

          const values = [
            response.totalExpenses,
            response.highestExpense,
            response.averageExpense,
            response.totalRecords
          ];

          this.dashboard.averageExpense = response.averageExpense;
          this.dashboard.highestExpense = response.highestExpense;
          this.dashboard.totalExpenses = response.totalExpenses;
          this.dashboard.totalRecords = response.totalRecords;

          if (this.chart) {
            this.chart.destroy();
          }

          this.chart = new Chart('dashboardChart', {

            type: typegraphic,

            data: {

              labels,

              datasets: [{

                label: 'Visão Geral Financeira',

                data: values,

                backgroundColor: [
                  '#0078d7',
                  '#ffcc00',
                  '#00b294',
                  '#e81123'
                ],

                borderColor: [
                  '#0078d7',
                  '#ffcc00',
                  '#00b294',
                  '#e81123'
                ],

                borderWidth: 1

              }]

            },

            options: {

              responsive: true,

              maintainAspectRatio: false,

              plugins: {

                title: {

                  display: true,

                  text: 'Resumo Financeiro'

                },

                legend: {

                  display: true,

                  position: 'bottom'

                }

              }

            }

          });

        },

        error: (error) => {

          console.error(
            'Erro ao carregar visão geral',
            error
          );

        }

      });
  }

  // 🔹 chamado pelo body quando o canvas está pronto
  onCanvasReady(canvasId: string): void {
    console.log(`Canvas ${canvasId} pronto para renderização`);
    // opcional: já renderizar um gráfico default
    this.onGenerateGraphic('bar');
  }




}
