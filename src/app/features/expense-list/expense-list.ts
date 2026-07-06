import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, Footer],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.scss'],
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  ngOnInit(): void {


  }



  expenses$!: Observable<Expense[]>;

  fetchExpenses(): void {
    this.expenses$ = this.http.get<Expense[]>('http://localhost:8080/api/expenses/findAll');
  }


}
