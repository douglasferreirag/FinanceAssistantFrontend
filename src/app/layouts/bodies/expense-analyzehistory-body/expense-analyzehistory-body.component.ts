import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-expense-analyzehistory-body',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './expense-analyzehistory-body.html',
  styleUrl: './expense-analyzehistory-body.scss',
})
export class ExpenseAnalyzeHistoryBodyComponent {

  @Input() messages: { sender: string; text: string }[] = [];

  @Input() userMessage = '';

  @Input() personsName: string[] = [];

  selectedPerson = '';

  @Output()
  personSelected = new EventEmitter<string>();

  onSelectionChange(): void {
    this.personSelected.emit(this.selectedPerson);
  }

  clear(): void {
    this.selectedPerson = '';
  }
}
