
import { Component, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
//import { Expense } from '../../models/expense.model';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Footer } from "../../layouts/footer/footer.js";
import { ExpenseRegisterHeaderComponent } from "../../layouts/headers/expense-register-header/expense-register-header.js";
import { ExpenseRegisterBodyComponent } from "../../layouts/bodies/expense-register-body/expense-register-body.js";
import { NavigationService } from '../../utils/NavigationService.js';
import { ExpenseRequest } from '../../dtos/requests/expense-request.js';



@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule, Footer, ExpenseRegisterHeaderComponent, ExpenseRegisterBodyComponent],
  templateUrl: './expense-register.component.html',
  styleUrls: ['./expense-register.component.scss']
})
export class ExpenseRegisterComponent {

  expense: ExpenseRequest = {
        description: '',
        cost: 0,
        expenseDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ),
        categoryName : '',
        personName: '',
  };

  @ViewChild(ExpenseRegisterBodyComponent) expenseBody!: ExpenseRegisterBodyComponent;

  @Output() closed = new EventEmitter<void>();

  categoriesName: string[] = [];
  personsName: string[] = [];
  loading = false;
  categoryName: string = '';
  personName: string = '';

  constructor(private http: HttpClient,
              public navigation: NavigationService,
              private cdr: ChangeDetectorRef) {}

  // 🔹 Agora o pai recebe o form do body
  onSubmit() {

        // 🔹 Verificações específicas
        // 🔹 Validações de campos obrigatórios
        if (!this.expense.description || this.expense.description.trim() === "") {
          alert("⚠️ A descrição não pode estar vazia");
          return;
        }

        if (!this.expense.cost || this.expense.cost <= 0) {
          alert("⚠️ O valor deve ser maior que zero");
          return;
        }

        if (!this.expense.expenseDate) {
          alert("⚠️ A data do gasto deve ser informada");
          return;
        }

       if (this.expense.categoryName === "Selecione...") {
          alert("⚠️ A categoria deve ser selecionada");
          return;
        }

       if (this.expense.personName === "Selecione...") {
          alert("⚠️ A pessoa que fez o gasto deve ser selecionada");
          return;
        }

        this.http.post<ExpenseRequest>('http://localhost:8080/api/expenses/save', this.expense).subscribe({
          next: (res: ExpenseRequest) => {
            alert(`✅ Gasto cadastrado com sucesso: ${res.description}`);
          },
          error: (err : HttpErrorResponse) => {
            console.error(err);
            alert("⚠️ Erro ao cadastrar gasto.");
          }
        });



  }

  onClear() {
      this.expense = {
          description: '',
          cost: 0,
          expenseDate: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()
          ),
          categoryName : '',
          personName: '',
    };
    this.categoriesName = [];
  }

  onCategorySelected(name: string) {

    //this.getCategoryByName(name);

    this.expense.categoryName = name;

  }

  onPersonSelected(name: string) {

    this.expense.personName = name;


  }


  goHome() {
    this.navigation.goTo('');
  }

 
  onImportCategories(): void {
    this.http.get<string[]>('http://localhost:8080/api/categories/names')
      .subscribe({
        next: (res) => {
          this.categoriesName = [...res];
          this.cdr.detectChanges();
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro ao importar categorias', err);
          this.loading = false;
          this.categoriesName = [];
        }
      });
  }

   onImportPersons(): void {
    this.http.get<string[]>('http://localhost:8080/api/persons/names')
      .subscribe({
        next: (res) => {
          this.personsName = [...res];
          this.cdr.detectChanges();
          this.loading = false;
        },
        error: (err) => {
          console.error('Erro ao importar pessoas', err);
          this.loading = false;
          this.personsName = [];
        }
      });
  }

}
