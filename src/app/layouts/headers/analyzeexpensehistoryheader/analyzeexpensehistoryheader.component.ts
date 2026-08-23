import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-analyzeexpensehistoryheader',
  imports: [CommonModule],
  templateUrl: './analyzeexpensehistoryheader.html',
  styleUrl: './analyzeexpensehistoryheader.scss',
})
export class AnalyzeExpenseHistoryHeaderComponent {

  @Output() goHome = new EventEmitter<void>();
  @Output() analyze = new EventEmitter<void>();


}
