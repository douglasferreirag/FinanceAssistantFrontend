import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-expense-analyzemonth-body',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './expense-analyzemonth-body.html',
  styleUrl: './expense-analyzemonth-body.scss',
})
export class ExpenseAnalyzeMonthBody {

  @Output() submitForm = new EventEmitter<{month:number, year:number}>();

  @Input() goal: number | null = null;
  @Input() total: number | null = null;
  @Input() result: string | null = null;

  month = new Date().getMonth() + 1; // retorna 1–12
  year = new Date().getFullYear();

  months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' }
  ];

  onSubmit() {
    this.submitForm.emit({ month: this.month, year: this.year });
  }
}
