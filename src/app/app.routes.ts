import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ExpenseRegisterComponent } from './features/expense-register/expense-register';
import { ExpenseListComponent } from './features/expense-list/expense-list';
import { AnalysiMonthExpenseComponent  } from './features/analysimonthexpense/analysimonthexpense';
import { GoalRegisterComponent } from './features/goal-register/goal-register';
import { GoalListComponent } from './goal-list/goal-list';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },

  {

    path: 'cadastrar-gasto',
    component: ExpenseRegisterComponent

  },

  {

    path: 'listar-gasto',
    component: ExpenseListComponent

  },

    {

    path: 'listar-metas',
    component: GoalListComponent

  },


  {

    path: 'analisar-gasto',
    component: AnalysiMonthExpenseComponent

  },

   {

    path: 'cadastrar-meta',
    component: GoalRegisterComponent

  }

];
