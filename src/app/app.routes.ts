import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component.js';
import { ExpenseRegisterComponent } from './features/expense-register/expense-register.js';
import { ExpenseListComponent } from './features/expense-list/expense-list.js';

import { GoalRegisterComponent } from './features/goal-register/goal-register.js';
import { GoalListComponent } from './features/goal-list/goal-list.js';
import { ExpenseDashboardSummaryComponent  } from './features/expense-dashboard-summary/expense-dashboard-summary.js';
import { CategoryRegisterComponent } from './features/category-register/category-register.js';
import { CategoryListComponent } from './features/category-list/category-list.component.js';

import { ExpenseAnalyzeHistoryComponent } from './features/expense-analyzehistory/expense-analyzehistory.component.js';
import { ExpenseAnalyzeMonthComponent } from './features/expense-analyzemonth/expense-analyzemonth.component.js';
import { PersonRegisterComponent } from './features/person-register/person-register.js';
import { PersonListComponent } from './features/person-list/person-list.js';


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
    path: 'register-category',
    component: CategoryRegisterComponent
  },
   {
    path: 'register-goal',
    component: GoalRegisterComponent
  },
  {
    path: 'register-person',
    component: PersonRegisterComponent
  },
    {
    path: 'list-persons',
    component: PersonListComponent
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
    path: 'list-categories',
    component: CategoryListComponent
  },
  {
    path: 'analyze-expenses',
    component: ExpenseAnalyzeMonthComponent
  },
  {
    path: 'analyze-expense-history',
    component: ExpenseAnalyzeHistoryComponent
  },
  {
    path: 'expense-dashboard-summary',
    component: ExpenseDashboardSummaryComponent
  },


];
