import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-goal-list-header',
  imports: [],
  templateUrl: './goal-list-header.html',
  styleUrl: './goal-list-header.scss',
})
export class GoalListHeader {

  @Output() home = new EventEmitter<void>();
  @Output() render = new EventEmitter<void>();

  // Recebe do pai o estado de carregamento
  @Input() loading = false;

}
