import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DashBoardSummaryResponse } from '../../../dtos/responses/dashboardsummary-response.js';

@Component({
  selector: 'app-expense-dashboard-summary-body',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './expense-dashboard-summary-body.html',
  styleUrls: ['./expense-dashboard-summary-body.scss']
})
export class ExpenseDashboardSummaryBodyComponent {
  @Output() canvasReady = new EventEmitter<string>();

  @Input()
  dashboard!: DashBoardSummaryResponse;

  @Input()
  dashboardData: DashBoardSummaryResponse[] = [];


  ngAfterViewInit() {
    // Assim que o body renderiza, avisamos o pai que o canvas está pronto
    this.canvasReady.emit('dashboardChart');
  }
}
