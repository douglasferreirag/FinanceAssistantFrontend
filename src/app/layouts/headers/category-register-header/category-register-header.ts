import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-register-header',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './category-register-header.html',
  styleUrl: './category-register-header.scss',
})
export class CategoryRegisterHeader {


  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();
  @Input() canSubmit = false;

}
