import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Footer } from "../../layouts/footer/footer.js";
import { NavigationService } from '../../services/NavigationService.js';

import { ExpenseAnalyzeHistoryBodyComponent } from '../../layouts/bodies/expense-analyzehistory-body/expense-analyzehistory-body.component.js';
import { ExpenseAnalyzeHistoryHeaderComponent } from '../../layouts/headers/expense-analyzehistory-header/expense-analyzehistory-header.component.js';

@Component({
  selector: 'app-expense-analyze-history',
  imports: [
    Footer,
    ExpenseAnalyzeHistoryHeaderComponent,
    ExpenseAnalyzeHistoryBodyComponent
  ],
  templateUrl: './expense-analyzehistory.html',
  styleUrl: './expense-analyzehistory.scss',
})
export class ExpenseAnalyzeHistoryComponent implements OnInit {

  @ViewChild(ExpenseAnalyzeHistoryBodyComponent)
  body!: ExpenseAnalyzeHistoryBodyComponent;

  messages: { sender: string, text: string }[] = [];
  userMessage = '';

  loading = false;

  personsName: string[] = [];
  selectedPerson = '';

  constructor(
    private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.importPersons();
  }

  importPersons(): void {
    this.http
      .get<string[]>('http://localhost:8080/api/persons/names')
      .subscribe({
        next: (persons) => {

          this.personsName = [
            'Selecione',
            ...persons
          ];

          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao carregar pessoas', err);
          this.personsName = ['Selecione'];
        }
      });
  }

  private getAnalyzeUrl(): string {

    const hasPersonSelected =
      this.selectedPerson &&
      this.selectedPerson.trim() !== '' &&
      this.selectedPerson !== 'Selecione';

    return hasPersonSelected
      ? `http://localhost:8080/api/expenses/analyzeExpensesByPerson/${encodeURIComponent(this.selectedPerson)}`
      : 'http://localhost:8080/api/expenses/analyzeHistory';
  }

  private getAnalyzeMessage(): string {

    const hasPersonSelected =
      this.selectedPerson &&
      this.selectedPerson.trim() !== '' &&
      this.selectedPerson !== 'Selecione';

    return hasPersonSelected
      ? `💬 Analisando os gastos de ${this.selectedPerson}...`
      : '💬 Analisando histórico completo de gastos...';
  }

  onPersonSelected(personName: string): void {
    this.selectedPerson = personName;
  }

  onAnalyze(): void {

    this.loading = true;

    this.messages = [
      {
        sender: 'bot',
        text: this.getAnalyzeMessage()
      }
    ];

    this.http.post<string>(
      this.getAnalyzeUrl(),
      {},
      { responseType: 'text' as 'json' }
    ).subscribe({
      next: (res) => {

        this.messages = [
          ...this.messages,
          {
            sender: 'bot',
            text: res
          }
        ];

        this.loading = false;
        this.cdr.detectChanges();
      },

      error: (err) => {

        console.error('Erro ao analisar histórico', err);

        this.messages = [
          ...this.messages,
          {
            sender: 'bot',
            text: err.status === 429
              ? '⚠️ Limite de acessos à IA atingido. Tente novamente mais tarde.'
              : 'Erro ao analisar histórico de gastos.'
          }
        ];

        this.loading = false;
      }
    });
  }

  onClear(): void {

    this.messages = [];

    this.selectedPerson = 'Selecione';

    if (this.body) {
      this.body.clear();
    }

    this.cdr.detectChanges();
  }

  onGoHome(): void {
    this.navigation.goTo('');
  }
}
