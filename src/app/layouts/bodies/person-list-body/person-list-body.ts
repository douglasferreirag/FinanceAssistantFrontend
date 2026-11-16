import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PersonResponse } from '../../../dtos/responses/person-response.js';

@Component({
  selector: 'app-person-list-body',
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './person-list-body.html',
  styleUrl: './person-list-body.scss',
})
export class PersonListBody {
  @Input() persons: PersonResponse[] = [];
}
