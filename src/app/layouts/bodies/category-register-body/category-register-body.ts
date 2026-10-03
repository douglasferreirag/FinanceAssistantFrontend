import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {  FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-register-body',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  templateUrl: './category-register-body.html',
  styleUrl: './category-register-body.scss',
})
export class CategoryRegisterBodyComponent {

  @Input() category: any;
  @Output() submit = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();
  @ViewChild('categoryForm') categoryForm!: NgForm;

  onSubmit(form: NgForm) {
    this.submit.emit(this.category);
  }

  onClear(form: NgForm) {
    this.clear.emit(); // avisa o pai

  }





}
