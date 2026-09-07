import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-expense-graphics-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './expense-graphics-header.html',
  styleUrls: ['./expense-graphics-header.scss']
})
export class ExpenseGraphicsHeaderComponent {
  @Output() goHome = new EventEmitter<void>();
  @Output() generateGraphic = new EventEmitter<ChartType>();
}
