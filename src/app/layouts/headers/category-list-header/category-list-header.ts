import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-list-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './category-list-header.html',
  styleUrl: './category-list-header.scss',
})
export class CategoryListHeader {

  @Output() home = new EventEmitter<void>();
  @Output() render = new EventEmitter<void>();

  // Recebe do pai o estado de carregamento
  @Input() loading = false;

}
