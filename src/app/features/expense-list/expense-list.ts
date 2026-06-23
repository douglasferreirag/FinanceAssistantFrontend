import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavigationService } from '../../utils/NavigationService';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.scss'],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  ngOnInit(): void {
    this.fetchExpenses(); // chama o back assim que a página carrega

  }

  expenses$!: Observable<Expense[]>;

  private fetchExpenses(): void {
    this.expenses$ = this.http.get<Expense[]>('http://localhost:8080/api/expenses/findAll');
  }


}
