import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expense-analyzehistory-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './expense-analyzehistory-header.html',
  styleUrl: './expense-analyzehistory-header.scss',
})
export class ExpenseAnalyzeHistoryHeaderComponent {

  @Output() goHome = new EventEmitter<void>();
  @Output() analyze = new EventEmitter<void>();


}
