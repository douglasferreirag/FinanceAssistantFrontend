import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-register-header',
  templateUrl: './expense-register-header.html',
  styleUrls: ['./expense-register-header.scss']
})
export class ExpenseRegisterHeaderComponent {
  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();
}
