import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-analyzemonthexpense-header',
  imports: [],
  templateUrl: './analyzemonthexpense-header.html',
  styleUrl: './analyzemonthexpense-header.scss',
})
export class AnalyzemonthexpenseHeader {

  @Output() importGoal = new EventEmitter<void>();
  @Output() importTotal = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() goHome = new EventEmitter<void>();
  @Output() analyze = new EventEmitter<void>();
  @Input() analyzeEnabled: boolean = false;

}
