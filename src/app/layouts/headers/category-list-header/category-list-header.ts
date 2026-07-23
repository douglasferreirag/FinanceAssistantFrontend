import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-category-list-header',
  imports: [],
  templateUrl: './category-list-header.html',
  styleUrl: './category-list-header.scss',
})
export class CategoryListHeader {

  @Output() home = new EventEmitter<void>();
  @Output() render = new EventEmitter<void>();

  // Recebe do pai o estado de carregamento
  @Input() loading = false;

}
