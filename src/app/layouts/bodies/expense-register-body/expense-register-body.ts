import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ExpenseRequest } from '../../../dtos/requests/expense-request.js';

export const MY_DATE_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-expense-register-body',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    provideNativeDateAdapter()
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './expense-register-body.html',
  styleUrls: ['./expense-register-body.scss']
})
export class ExpenseRegisterBodyComponent {
  @Input() expense: any;
  @Input() categoriesName: string[] = [];
  @Input() personsName: string[] = []; // 🔹 lista de pessoas recebida do pai

  @Output() submitExpense = new EventEmitter<ExpenseRequest>();
  @Output() clearExpense = new EventEmitter<void>();
  @Output() categorySelected = new EventEmitter<string>();
  @Output() personSelected = new EventEmitter<string>(); // 🔹 evento para pessoa

  @ViewChild('expenseForm') expenseForm!: NgForm;

  categoryNameSelected: string = '';
  personNameSelected: string = ''; // 🔹 valor selecionado no select de pessoa

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR'); // força o formato brasileiro
  }

  onCategorySelected(event: any) {
    this.categorySelected.emit(this.categoryNameSelected);
    this.expense.categoryId = event.value; // garante que o expense receba o id
  }

  onPersonSelected(event: any) {
    this.personSelected.emit(this.personNameSelected);
    this.expense.personId = event.value; // garante que o expense receba o id
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitExpense.emit(this.expense);
    }
  }

  onClear(form: NgForm) {
    form.resetForm();
    this.clearExpense.emit();
  }
}
