import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ExpenseRegisterComponent } from './features/expense-register/expense-register';
import { ExpenseListComponent } from './features/expense-list/expense-list';
import { AnalysiMonthExpenseComponent } from './features/analysimonthexpense/analysimonthexpense';
import { GoalRegisterComponent } from './features/goal-register/goal-register';
import { GoalListComponent } from './features/goal-list/goal-list';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register-expense',   
    component: ExpenseRegisterComponent
  },
  {
    path: 'list-expenses',
    component: ExpenseListComponent
  },
  {
    path: 'list-goals',
    component: GoalListComponent
  },
  {
    path: 'analyze-expenses',
    component: AnalysiMonthExpenseComponent
  },
  {
    path: 'register-goal',
    component: GoalRegisterComponent
  }
];
