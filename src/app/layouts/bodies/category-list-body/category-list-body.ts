import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-category-list-body',
  imports: [CommonModule,
            MatCardModule,
            MatTableModule],
  templateUrl: './category-list-body.html',
  styleUrl: './category-list-body.scss',
})
export class CategoryListBody {

  @Input() categories: Category[] = [];

}
