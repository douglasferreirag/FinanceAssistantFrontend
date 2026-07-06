import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core'; // 👈 Importe o ChangeDetectorRef
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../utils/NavigationService';
import { Footer } from "../../layouts/footer/footer";

@Component({
  selector: 'app-analysisexpense',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './analysimonthexpense.html',
  styleUrls: ['./analysimonthexpense.scss'],
})
export class AnalysiMonthExpenseComponent {
  private apiUrl = 'http://localhost:8080/api/chatbot';
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  month: number = 0;
  year: number = 0;
  loading = false;

  constructor(
    private http: HttpClient,
    public navigationService: NavigationService,
    private cdr: ChangeDetectorRef // 👈 Injete aqui
  ) {}

  onSubmit(): void {
    if (!this.month || !this.year) {
      this.messages.push({ sender: 'bot', text: '⚠️ Informe um mês e ano válidos.' });
      return;
    }

    this.loading = true;

    this.http.post(`${this.apiUrl}/analyze`, null, {
      params: { month: this.month.toString(), year: this.year.toString() },
      responseType: 'text' // 👈 Deixe apenas 'text' se o back retorna texto puro
    }).subscribe({
      next: (response: string) => {
        this.loading = false;
        this.messages.push({ sender: 'bot', text: response });
        this.cdr.detectChanges(); // 👈 Força a renderização na tela imediatamente
      },
      error: () => {
        this.loading = false;
        this.messages.push({ sender: 'bot', text: '⚠️ Não foi possível realizar a análise financeira.' });
        this.cdr.detectChanges(); // 👈 Força a renderização no erro também
      }
    });
  }
}
