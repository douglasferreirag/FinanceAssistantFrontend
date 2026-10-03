import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseRegisterComponent } from './features/expense-register/expense-register';
import { ExpenseListComponent } from './features/expense-list/expense-list';

import { GoalRegisterComponent } from './features/goal-register/goal-register';
import { GoalListComponent } from './features/goal-list/goal-list';
import { ExpenseGraphicsComponent } from './features/expense-graphics/expense-graphics';
import { CategoryRegisterComponent } from './features/category-register/category-register';
import { CategoryListComponent } from './features/category-list/category-list.component';

import { ExpenseAnalyzeHistoryComponent } from './features/expense-analyzehistory/expense-analyzehistory.component';
import { ExpenseAnalyzeMonthComponent } from './features/expense-analyzemonth/expense-analyzemonth.component';
import { PersonRegisterComponent } from './features/person-register/person-register';
import { PersonListComponent } from './features/person-list/person-list';


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
    path: 'expense-graphics',
    component: ExpenseGraphicsComponent
  },


];
