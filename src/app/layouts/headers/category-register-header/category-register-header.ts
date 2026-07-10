import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category-register-header',
  imports: [],
  templateUrl: './category-register-header.html',
  styleUrl: './category-register-header.scss',
})
export class CategoryRegisterHeader {


  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();

}
