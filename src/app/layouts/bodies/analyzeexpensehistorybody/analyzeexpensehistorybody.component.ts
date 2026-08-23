import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analyzeexpensehistorybody',
  imports: [FormsModule, CommonModule],
  templateUrl: './analyzeexpensehistorybody.html',
  styleUrl: './analyzeexpensehistorybody.scss',
})
export class AnalyzeExpenseHistorybodyComponent {

  @Input() messages: { sender: string, text: string }[] = [];



}
