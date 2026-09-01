import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-expense-register-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './expense-register-header.html',
  styleUrls: ['./expense-register-header.scss']
})
export class ExpenseRegisterHeaderComponent {
  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();
  @Output() importCategories = new EventEmitter<void>();

}
