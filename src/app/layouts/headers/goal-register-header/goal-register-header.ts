import { Component, Input,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-goal-register-header',
  imports: [FormsModule],
  templateUrl: './goal-register-header.html',
  styleUrl: './goal-register-header.scss',
})
export class GoalRegisterHeader {

  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();

}
