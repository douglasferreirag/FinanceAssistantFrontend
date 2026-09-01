import { Component, Input, Output,  EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-goal-register-body',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
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
