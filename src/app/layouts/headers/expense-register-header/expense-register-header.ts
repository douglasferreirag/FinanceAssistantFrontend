import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ExpenseRequest } from '../../../dtos/requests/expense-request.js';

@Component({
  selector: 'app-expense-register-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './expense-register-header.html',
  styleUrls: ['./expense-register-header.scss']
})
export class ExpenseRegisterHeaderComponent {
  @Input() canSubmit = false; // ✅ pai controla se o botão deve estar habilitado

  @Output() save = new EventEmitter<ExpenseRequest>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();
  @Output() importCategories = new EventEmitter<void>();
  @Output() importPersons = new EventEmitter<void>();
}
