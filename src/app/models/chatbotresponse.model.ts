export interface ChatbotResponse {
  month: number;
  year: number;
  totalExpenses: number;
  goalLimit: number;
  exceeded: boolean;
  suggestion: string;
}