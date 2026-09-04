import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
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
  @Output() submitGoal = new EventEmitter<any>();
  @Output() clearGoal = new EventEmitter<void>();

  @ViewChild('goalForm') goalForm!: NgForm;

  months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // 🔹 Pré-seleciona mês e ano atuais
  selectedMonthIndex: number = new Date().getMonth(); // 0 = Janeiro
  goal = {
    month: this.selectedMonthIndex + 1, // converte para número do mês
    year: new Date().getFullYear(),
    ceiling: null
  };

  onMonthChange() {
    this.goal.month = this.selectedMonthIndex + 1;
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
      ceiling: null
    };
    this.clearGoal.emit();
  }
}
