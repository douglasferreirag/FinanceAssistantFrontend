import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list-header',
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
