import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list-body',
  imports: [CommonModule],
  templateUrl: './category-list-body.html',
  styleUrl: './category-list-body.scss',
})
export class CategoryListBody {

  @Input() categories: Category[] = [];

}
