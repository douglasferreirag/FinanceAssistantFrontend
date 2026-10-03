import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Goal } from '../../../models/goal.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-goal-list-body',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './goal-list-body.html',
  styleUrl: './goal-list-body.scss',
})
export class GoalListBody {

  @Input() goals: Goal[] = [];
  displayedColumns: string[] = ['month', 'year', 'ceiling'];

}
