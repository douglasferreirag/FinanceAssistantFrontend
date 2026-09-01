import { Component, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";
import { ExpenseRegisterHeaderComponent } from "../../layouts/headers/expense-register-header/expense-register-header";
import { ExpenseRegisterBodyComponent } from "../../layouts/bodies/expense-register-body/expense-register-body";
import { Category } from '../../models/category.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule, Footer, ExpenseRegisterHeaderComponent, ExpenseRegisterBodyComponent],
  templateUrl: './expense-register.component.html',
  styleUrls: ['./expense-register.component.scss']

})

export class ExpenseRegisterComponent {

  expense: Expense = {
  description: '',
  cost: 0,
  expenseDate: new Date(), // agora é um objeto Date
  category: { id: 0, name: '' }
};

  @ViewChild(ExpenseRegisterBodyComponent) expenseBody!: ExpenseRegisterBodyComponent;
  @ViewChild('expenseForm') expenseForm!: NgForm

  @Output() closed = new EventEmitter<void>();

  constructor(private http: HttpClient,
              public navigation: NavigationService,
              private cdr: ChangeDetectorRef) {}

  categoriesName: string[] = [];
  loading = false;
  category: Category = {id: 0, name: ''};



  onSubmit(expenseForm: any) {




    const expensePayload = {
      description: this.expense.description,
      cost: this.expense.cost,
      expenseDate: this.expense.expenseDate,
      category: this.category // busca a categoria pelo nome
    };

    console.log(this.expense.category);

    this.http.post<any>('http://localhost:8080/api/expenses/save', expensePayload).subscribe({
      next: (res) => {
        alert(`✅ Gasto cadastrado com sucesso: ${res.reply || 'OK'}`);

      },
      error: (err) => {
        console.error(err);
        alert("⚠️ Erro ao cadastrar gasto.");
      }
    });
  }


  onClear() {
    // basta redefinir o objeto, os inputs limpam via ngModel
    this.expense =  {
        description: '',
        cost: 0,
        expenseDate: new Date() , // formato YYYY-MM-DD,
        category: {id: 0, name: ''}
    };
    this.categoriesName = [];


  }

  onCategorySelected(name: string) {
    console.log("Categoria recebida do filho:", name);
    // aqui você pode chamar o backend para buscar o objeto completo
    this.getCategoryByName(name);
    console.log(this.category);

  }

  goHome() {
    this.navigation.goTo('');
  }



  getCategoryByName(name: string) : void{
    this.http.get<Category>(`http://localhost:8080/api/categories/findByName/${name}`)
      .subscribe({
        next: (res) => {
          this.category = res; // ✅ objeto Category completo
          console.log('Categoria encontrada:', res);
        },
        error: (err) => {
          console.error('Erro ao buscar categoria por nome', err);
          alert("⚠️ Categoria não encontrada.");
          this.category = {id: 0, name: ''}; // ✅ limpa a categoria
        }
    });
  }




  onImportCategories(): void {
    this.http.get<string[]>('http://localhost:8080/api/categories/names')
      .subscribe({
        next: (res) => {
          // atribui um novo array, não muta o existente
          this.categoriesName = [...res];
          console.log('Categorias importadas:', this.categoriesName);
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
           this.categoriesName = [];
        }
      });
}

}
