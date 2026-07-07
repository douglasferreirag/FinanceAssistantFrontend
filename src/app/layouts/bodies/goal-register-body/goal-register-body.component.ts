import { Component, Input, Output,  EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';




@Component({
  selector: 'app-goal-register-body',
  imports: [FormsModule],
  templateUrl: './goal-register-body.html',
  styleUrl: './goal-register-body.scss',
})
export class GoalRegisterBodyComponent {

  @Input() goal: any;
  @Output() submitGoal = new EventEmitter<any>();
  @Output() clearGoal = new EventEmitter<void>();

  

  onSubmit(form: NgForm) {
    this.submitGoal.emit(this.goal);

  }

  onClear(form: NgForm) {

    this.clearGoal.emit();
  }
}
