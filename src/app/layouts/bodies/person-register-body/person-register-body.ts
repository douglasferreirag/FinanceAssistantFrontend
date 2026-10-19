import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PersonRequest } from '../../../dtos/requests/person-request.js';

@Component({
  selector: 'app-person-register-body',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-register-body.html',
  styleUrl: './person-register-body.scss',
})
export class PersonRegisterBodyComponent {
  @Input() person!: PersonRequest;

  // Eventos que o pai escuta
  @Output() submitPerson = new EventEmitter<PersonRequest>();
  @Output() clearPerson = new EventEmitter<void>();

  // Expor o form para o pai monitorar validade
  @ViewChild('personForm') personForm!: NgForm;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // só emite o objeto, sem lógica extra
      this.submitPerson.emit(this.person);
    }
  }

  onClear(form: NgForm): void {
    form.resetForm();
    this.clearPerson.emit();
  }
}
