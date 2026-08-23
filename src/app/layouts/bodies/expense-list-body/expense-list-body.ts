import { Component, Input } from '@angular/core';
import { Expense } from '../../../models/expense.model';
import {  CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense-list-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list-body.html',
  styleUrls: ['./expense-list-body.scss']
})
export class ExpenseListBodyComponent {
  @Input() expenses: Expense[] = [];

}
