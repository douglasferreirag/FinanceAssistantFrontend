import { Component, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-goal-register-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './goal-register-header.html',
  styleUrls: ['./goal-register-header.scss']
})
export class GoalRegisterHeaderComponent {
  @Output() save = new EventEmitter<void>();
  @Output() clear = new EventEmitter<void>();
  @Output() home = new EventEmitter<void>();
}
