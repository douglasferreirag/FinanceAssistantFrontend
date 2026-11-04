import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-expense-dashboard-summary-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './expense-dashboard-summary-header.html',
  styleUrls: ['./expense-dashboard-summary-header.scss']
})
export class ExpenseDashboardSummaryHeaderComponent {
  @Output() goHome = new EventEmitter<void>();
  @Output() generateGraphic = new EventEmitter<ChartType>();
}
