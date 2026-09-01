import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expense-analyzemonth-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './expense-analyzemonth-header.html',
  styleUrl: './expense-analyzemonth-header.scss',
})
export class ExpenseAnalyzeMonthHeader {

  @Output() importGoal = new EventEmitter<void>();
  @Output() importTotal = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() goHome = new EventEmitter<void>();
  @Output() analyze = new EventEmitter<void>();
  @Input() analyzeEnabled: boolean = false;

}
