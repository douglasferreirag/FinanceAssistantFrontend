import { Component, OnInit } from '@angular/core';
import { Goal } from '../../models/goal.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavigationService } from '../../utils/NavigationService';



@Component({
  selector: 'app-goal-list',
  imports: [CommonModule],
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss',
})
export class GoalListComponent implements OnInit {

   goals: Goal[] = [];

  constructor(private http: HttpClient, public navigation: NavigationService) {}


  goals$!: Observable<Goal[]>;

  ngOnInit(): void {


  }

  fetchGoals(): void {
    this.goals$ = this.http.get<Goal[]>('http://localhost:8080/api/goals/findAll');
  }


}
