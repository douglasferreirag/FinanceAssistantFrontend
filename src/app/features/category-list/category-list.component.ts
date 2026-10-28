import { ChangeDetectorRef, Component } from '@angular/core';
import { Footer } from "../../layouts/footer/footer.js";
import { Category } from '../../models/category.model.js';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService.js';
import { CategoryListHeader } from "../../layouts/headers/category-list-header/category-list-header.js";
import { CategoryListBody } from "../../layouts/bodies/category-list-body/category-list-body.js";
import { CategoryResponse } from '../../dtos/responses/category-response.js';

@Component({
  selector: 'app-category-list',
  imports: [Footer, CategoryListHeader, CategoryListBody],
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryListComponent {

    categories: CategoryResponse[] = [];
    loading = false;

    constructor(private http: HttpClient,
      public navigation: NavigationService,
      private cdr: ChangeDetectorRef
    ) {}

    // Método 1: busca os dados no backend
      importCategories(): void {
              this.http.get<CategoryResponse[]>('http://localhost:8080/api/categories/findAll')
                .subscribe({
                  next: (res) => {
                    // atribui um novo array, não muta o existente
                    this.categories = [...res];
                    console.log('Categorias importadas:', this.categories);
                    this.cdr.detectChanges(); // ✅ força atualização imediata
                    this.loading = false;
                  },
                  error: (err) => {
                    if (err.name === 'AbortError') {
                      console.log('⚠️ Requisição cancelada (AbortError), sem impacto.');
                    } else {
                      console.log('Erro ao importar categorias', err);
                    }
                    this.loading = false;
                    this.categories = [];
                  }
                });

        }

        onRenderCategories() {
          this.importCategories();

        }

      goHome() {
        this.navigation.goTo('');
      }




}
