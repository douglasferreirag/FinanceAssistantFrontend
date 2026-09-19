import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-register-header',
  imports: [
      MatToolbarModule,
      MatButtonModule
  ],
  templateUrl: './person-register-header.html',
  styleUrl: './person-register-header.scss',
})
export class PersonRegisterHeader {

    @Output() save = new EventEmitter<void>();
    @Output() clear = new EventEmitter<void>();
    @Output() home = new EventEmitter<void>();
    @Input() canSubmit = false;

}
