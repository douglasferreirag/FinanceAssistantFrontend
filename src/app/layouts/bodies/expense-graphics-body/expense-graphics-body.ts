import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-expense-graphics-body',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './expense-graphics-body.html',
  styleUrls: ['./expense-graphics-body.scss']
})
export class ExpenseGraphicsBodyComponent {
  @Output() canvasReady = new EventEmitter<string>();

  ngAfterViewInit() {
    // Assim que o body renderiza, avisamos o pai que o canvas está pronto
    this.canvasReady.emit('expensesChart');
  }
}
