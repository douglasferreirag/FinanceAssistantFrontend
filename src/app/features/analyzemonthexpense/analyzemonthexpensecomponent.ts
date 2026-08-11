import { ChangeDetectorRef, Component } from '@angular/core';
import { Footer } from "../../layouts/footer/footer";
import { AnalyzemonthexpenseHeader } from "../../layouts/headers/analyzemonthexpense-header/analyzemonthexpense-header";
import { AnalyzemonthexpenseBody } from "../../layouts/bodies/analyzemonthexpense-body/analyzemonthexpense-body";
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../../utils/NavigationService';

@Component({
  selector: 'app-analyzemonthexpense',
  imports: [Footer, AnalyzemonthexpenseHeader, AnalyzemonthexpenseBody],
  templateUrl: './analyzemonthexpense.html',
  styleUrl: './analyzemonthexpense.scss',
})
export class AnalyzeMonthExpenseComponent {

  goal: number | null = null;
  total: number | null = null;
  result: string | null = null;
  analyzeEnabled: boolean = false;
  loading = false;

  month = new Date().getMonth() + 1; // retorna 1–12
  year = new Date().getFullYear();

  constructor(private http: HttpClient,
      public navigation: NavigationService,
      private cdr: ChangeDetectorRef,

  ) {}

  onImportGoal(): void {
    this.loading = true;

    // agora usando as propriedades da classe


    this.http.get<number>(
      `http://localhost:8080/api/goals/findByMonthAndYear?month=${this.month}&year=${this.year}`
    ).subscribe({
      next: (res) => {
        this.goal = res;
        console.log(`Meta importada para ${this.month}/${this.year}:`, this.goal);
        this.updateAnalyzeEnabled();
        this.cdr.detectChanges();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao importar meta', err);
        this.goal = null;
        this.loading = false;
      }
    });
  }

  onImportTotal() {
     this.loading = true;

    console.log("Buscando total para:", this.month, this.year);

    this.http.get<number>(
      `http://localhost:8080/api/expenses/sumByMonthAndYear?month=${this.month}&year=${this.year}`
    ).subscribe({
      next: (res) => {
        this.total = res;
        console.log(`Total de gastos em ${this.month}/${this.year}:`, this.total);
        this.updateAnalyzeEnabled();
        this.cdr.detectChanges();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao importar total', err);
        this.total = null;
        this.loading = false;
      }
    });
  }

  onClear() {
    console.log("🧹 Limpando...");
    this.goal = null;
    this.total = null;
    this.result = null;
    this.analyzeEnabled = false;
  }

  onGoHome() {
    this.navigation.goTo('');
  }

  onAnalyze() {
    console.log("📑 Analisar...");
    if (this.goal != null && this.total != null) {
      this.result = this.total > this.goal ? "⚠️ Gastos acima da meta" : "✅ Gastos dentro da meta";
    }
  }

  onFormSubmit(data: {month:number, year:number}) {
    console.log("Formulário enviado:", data);
    // aqui depois vamos chamar o backend
  }

  private updateAnalyzeEnabled() {
    this.analyzeEnabled = this.goal != null && this.total != null;
  }

}
