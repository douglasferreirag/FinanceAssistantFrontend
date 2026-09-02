import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { CategoryRegisterBodyComponent } from '../../layouts/bodies/category-register-body/category-register-body';
import { Category } from '../../models/category.model';
import { Footer } from '../../layouts/footer/footer';
import { CategoryRegisterHeader } from "../../layouts/headers/category-register-header/category-register-header";


@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, Footer, CategoryRegisterBodyComponent, CategoryRegisterBodyComponent, CategoryRegisterHeader],
  templateUrl: './category-register.html',
  styleUrls: ['./category-register.scss']
})
export class CategoryRegisterComponent {

  category: Category = {
     id: 0,
     name: ''
  };

  @ViewChild(CategoryRegisterBodyComponent) categoryBody!: CategoryRegisterBodyComponent;
  @ViewChild('categoryForm') categoryForm!: NgForm;
  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient, public navigation: NavigationService) {}

  canSubmit = false;


  onSubmit(event: any) {

    const categoryPayload = { name: this.category.name };

    this.http.post<any>('http://localhost:8080/api/categories/save', categoryPayload).subscribe({
      next: (catRes) => {
        console.log('✅ Categoria verificada/cadastrada:', catRes);
        alert(`Categoria cadastrada com sucesso: ${catRes.reply || 'OK'}`);

      },
      error: (err) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar categoria.");
      }
    });
  }


  onClear(): void {
    this.category = {
      id: 0,
      name: ''
    };
  }

  goHome(): void {
    this.navigation.goTo('');
  }
}
