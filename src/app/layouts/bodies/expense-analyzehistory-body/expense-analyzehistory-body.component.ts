import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-expense-analyzehistory-body',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './expense-analyzehistory-body.html',
  styleUrl: './expense-analyzehistory-body.scss',
})
export class ExpenseAnalyzeHistoryBodyComponent {

  @Input() messages: { sender: string, text: string }[] = [];
  @Input() userMessage: string = '';



}
