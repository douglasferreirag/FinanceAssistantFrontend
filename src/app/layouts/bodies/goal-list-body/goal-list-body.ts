import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Goal } from '../../../models/goal.model';

@Component({
  selector: 'app-goal-list-body',
  imports: [CommonModule],
  templateUrl: './goal-list-body.html',
  styleUrl: './goal-list-body.scss',
})
export class GoalListBody {

  @Input() goals: Goal[] = [];

}
