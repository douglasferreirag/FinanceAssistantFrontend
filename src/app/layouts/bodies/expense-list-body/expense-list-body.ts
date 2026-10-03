import { Component, Input } from '@angular/core';
import { Expense } from '../../../models/expense.model';
import {  CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-expense-list-body',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './expense-list-body.html',
  styleUrls: ['./expense-list-body.scss']
})
export class ExpenseListBodyComponent {
   // ✅ Propriedade que o Angular espera

  @Input() expenses: Expense[] = [];

  // ✅ Propriedade que o Angular Material precisa
  displayedColumns: string[] = ['description', 'expenseDate', 'cost'];

}
