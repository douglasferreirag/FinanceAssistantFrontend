import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-goal-register-body',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './goal-register-body.html',
  styleUrls: ['./goal-register-body.scss'],
})
export class GoalRegisterBodyComponent {

  @Input() goal: any = {
    month: new Date().getMonth() + 1,   // mês atual (1–12)
    year: new Date().getFullYear(),     // ano atual
    ceiling: 0                          // 🔹 valor limite default
  };

  @Output() submitGoal = new EventEmitter<any>();
  @Output() clearGoal = new EventEmitter<void>();
  @Output() monthSelected = new EventEmitter<string>();

  @ViewChild('goalForm') goalForm!: NgForm;

  months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  selectedMonthIndex: number = new Date().getMonth(); // 0 = Janeiro

  onMonthChange() {
    this.goal.month = this.selectedMonthIndex + 1;
    this.monthSelected.emit(this.months[this.selectedMonthIndex]);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitGoal.emit(this.goal);
    }
  }

  onClear(form: NgForm) {
    form.resetForm();
    this.selectedMonthIndex = new Date().getMonth();
    this.goal = {
      month: this.selectedMonthIndex + 1,
      year: new Date().getFullYear(),
      ceiling: 0
    };
    this.clearGoal.emit();
  }
}
