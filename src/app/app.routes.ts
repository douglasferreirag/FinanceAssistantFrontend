import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExpenseRegisterComponent } from './features/expense-register/expense-register';
import { ExpenseListComponent } from './features/expense-list/expense-list';
import { AnalysiMonthExpenseComponent } from './features/analysimonthexpense/analysimonthexpense';
import { GoalRegisterComponent } from './features/goal-register/goal-register';
import { GoalListComponent } from './features/goal-list/goal-list';
import { ExpenseGraphicComponent } from './features/expensedashgraphic/expensegraphic';
import { CategoryRegisterComponent } from './features/category-register/category-register';
import { CategoryListComponent } from './features/category-list/category-list.component';


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
    component: AnalysiMonthExpenseComponent
  },
  {
    path: 'expense-graphic',
    component: ExpenseGraphicComponent
  },


];
