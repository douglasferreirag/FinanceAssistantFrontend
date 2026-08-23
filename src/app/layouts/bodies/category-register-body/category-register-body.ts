import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-register-body',
  imports: [FormsModule],
  templateUrl: './category-register-body.html',
  styleUrl: './category-register-body.scss',
})
export class CategoryRegisterBodyComponent {

  @Input() category: any;
  @Output() submitAnalysis = new EventEmitter<any>();
  @Output() clearAnalysis = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    this.submitAnalysis.emit(this.category);
  }

  onClear(form: NgForm) {
    this.clearAnalysis.emit(); // avisa o pai

  }

}
