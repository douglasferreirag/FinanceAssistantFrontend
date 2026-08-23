import { ChangeDetectorRef, Component } from '@angular/core';
import { Footer } from "../../layouts/footer/footer";
import { AnalyzeExpenseHistoryHeaderComponent } from "../../layouts/headers/analyzeexpensehistoryheader/analyzeexpensehistoryheader.component";
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';
import { AnalyzeExpenseHistorybodyComponent } from "../../layouts/bodies/analyzeexpensehistorybody/analyzeexpensehistorybody.component";

@Component({
  selector: 'app-analyzehistoryexpense',
  imports: [Footer, AnalyzeExpenseHistoryHeaderComponent, AnalyzeExpenseHistorybodyComponent],
  templateUrl: './analyzehistoryexpense.html',
  styleUrl: './analyzehistoryexpense.scss',
})
export class AnalyzeHistoryExpenseComponent {

  messages: { sender: string, text: string }[] = [];
  userMessage: string = '';
  loading = false;

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
    this.messages.push({ sender: 'ai', text: '💬 Analisando histórico completo de gastos...' });

    this.http.post<string>(
      'http://localhost:8080/api/expenses/analyzeHistory',
      {},
      { responseType: 'text' as 'json' }
    ).subscribe({
      next: (res) => {
        // resposta da IA
        console.log(res);
        this.messages.push({ sender: 'ai', text: res });
        this.cdr.detectChanges();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao analisar histórico', err);
        this.messages.push({ sender: 'ai', text: "Erro ao analisar histórico de gastos." });
        this.loading = false;
      }
    });
  }

  onGoHome() {
      this.navigation.goTo('');
  }

}
