import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-expense-list-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './expense-list-header.html',
  styleUrls: ['./expense-list-header.scss']
})
export class ExpenseListHeaderComponent {
  @Output() home = new EventEmitter<void>();
  @Output() render = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  // Recebe do pai o estado de carregamento
  @Input() loading = false;
}
