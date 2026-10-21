import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



import { NavigationService } from '../../utils/NavigationService.js';
import { Footer } from '../../layouts/footer/footer.js';
import { CategoryRegisterBodyComponent } from '../../layouts/bodies/category-register-body/category-register-body.js';
import { CategoryRegisterHeader } from '../../layouts/headers/category-register-header/category-register-header.js';
import { CategoryRequest } from '../../dtos/requests/category-request.js';


@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, Footer, CategoryRegisterBodyComponent, CategoryRegisterHeader],
  templateUrl: './category-register.html',
  styleUrls: ['./category-register.scss']
})
export class CategoryRegisterComponent {

  category: CategoryRequest = {
     "name": ''
  };

  @ViewChild(CategoryRegisterBodyComponent) categoryBody!: CategoryRegisterBodyComponent;
  @ViewChild('categoryForm') categoryForm!: NgForm;
  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  canSubmit = false;


  onSubmit(): void {
    if (!this.category.name || this.category.name.trim() === "") {
      alert("⚠️ O nome não pode estar vazio");
      return;
    }


    this.category.name = this.category.name.trim();
 

    this.http.post<CategoryRequest>(
      "http://localhost:8080/api/categories/save",
      this.category
    ).subscribe({
      next: (res: CategoryRequest) => {
        alert(`✅ Categoria cadastrada com sucesso: ${res.name}`);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        alert(err.error?.message || "⚠️ Erro ao cadastrar categoria.");
      }
    });
  }


  onClear(): void {
    this.category = {
      name: ''
    };
  }

  goHome(): void {
    this.navigation.goTo('');
  }
}
