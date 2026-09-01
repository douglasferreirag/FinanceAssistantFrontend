import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-expense-register-body',
   providers: [
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' } // exibe dd/MM/yyyy
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
  @Output() submitExpense = new EventEmitter<any>();
  @Output() clearExpense = new EventEmitter<void>();
  @Output() categorySelected = new EventEmitter<string>();

  categoryNameSelected: string = '';



  onCategoryChange() {
    this.categorySelected.emit(this.categoryNameSelected);
  }

  onSubmit(form: NgForm) {
    this.submitExpense.emit(this.expense);
  }

  onClear(form: NgForm) {
    this.clearExpense.emit(); // avisa o pai

  }


}
