import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-register-body',
  imports: [FormsModule],
  templateUrl: './expense-register-body.html',
  styleUrls: ['./expense-register-body.scss']
})
export class ExpenseRegisterBodyComponent {
  @Input() expense: any;
  @Output() submitExpense = new EventEmitter<any>();
  @Output() clearExpense = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    this.submitExpense.emit(this.expense);
  }

  onClear(form: NgForm) {
    this.clearExpense.emit(); // avisa o pai

  }

  
}
