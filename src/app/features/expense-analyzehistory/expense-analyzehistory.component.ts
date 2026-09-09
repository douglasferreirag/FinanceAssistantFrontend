import { ChangeDetectorRef, Component } from '@angular/core';
import { Footer } from "../../layouts/footer/footer";
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { ExpenseAnalyzeHistoryBodyComponent } from '../../layouts/bodies/expense-analyzehistory-body/expense-analyzehistory-body.component';
import { ExpenseAnalyzeHistoryHeaderComponent } from '../../layouts/headers/expense-analyzehistory-header/expense-analyzehistory-header.component';

@Component({
  selector: 'app-expense-analyze-history',
  imports: [Footer,  ExpenseAnalyzeHistoryHeaderComponent, ExpenseAnalyzeHistoryBodyComponent],
  templateUrl: './expense-analyzehistory.html',
  styleUrl: './expense-analyzehistory.scss',
})
export class ExpenseAnalyzeHistoryComponent {

  messages: { sender: string, text: string }[] = [];
  userMessage: string = '';
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    public navigation: NavigationService,
    private cdr: ChangeDetectorRef
  ) {}

  

  

  // evento de análise do histórico
 onAnalyze() {
    console.log("📊 Analisar histórico completo de gastos...");
    this.loading = true;

    // mensagem inicial no chatbot
    this.messages = [{ sender: 'bot', text: '💬 Analisando histórico completo de gastos...' }];

    this.http.post<string>(
      'http://localhost:8080/api/expenses/analyzeHistory',
      {},
      { responseType: 'text' as 'json' }
    ).subscribe({
      next: (res) => {
        // resposta da IA
        //console.log(typeof res);
        this.messages = [...this.messages, { sender: 'bot', text: res }];
        this.cdr.detectChanges();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao analisar histórico', err);

        if (err.status === 429) {
          // caso de limite de requisições
          this.messages = [...this.messages, { sender: 'bot', text: "⚠️ Limite de acessos à IA atingido. Tente novamente mais tarde." }];
        } else {
          this.messages = [...this.messages, { sender: 'bot', text: "Erro ao analisar histórico de gastos." }];
        }

        this.loading = false;
      }
    });
  }


  
  onGoHome() {
      this.navigation.goTo('');
  }

}
