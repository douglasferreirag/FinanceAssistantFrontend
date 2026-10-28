import { Component, Input } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ExpenseResponse } from '../../../dtos/responses/expense-response.js';

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

  @Input() expenses: ExpenseResponse[] = [];

  // ✅ Propriedade que o Angular Material precisa
  displayedColumns: string[] = ['description', 'expenseDate', 'cost'];

}
