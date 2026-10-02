import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-register-header',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './person-register-header.html',
  styleUrl: './person-register-header.scss',
})
export class PersonRegisterHeader {
  // Recebe do pai se o botão pode ser habilitado
  @Input() canSubmit: boolean = false;

  // Eventos que o pai escuta
  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();

  // Métodos auxiliares para emitir os eventos
  onSave(): void {
    this.save.emit();
  }

  onClear(): void {
    this.clear.emit();
  }

  onHome(): void {
    this.home.emit();
  }
}
