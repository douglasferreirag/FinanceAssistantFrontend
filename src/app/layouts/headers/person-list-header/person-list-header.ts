import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-list-header',
  imports: [ 
    MatToolbarModule,
    MatButtonModule],
  templateUrl: './person-list-header.html',
  styleUrl: './person-list-header.scss',
})
export class PersonListHeader {

  @Output() home = new EventEmitter<void>();
  @Output() render = new EventEmitter<void>();

  // Recebe do pai o estado de carregamento
  @Input() loading = false;

}
