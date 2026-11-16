import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { GoalResponse } from '../../../dtos/responses/goal-response.js';
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

  @Input() goals: GoalResponse[] = [];
  displayedColumns: string[] = ['month', 'year', 'ceiling'];

}
