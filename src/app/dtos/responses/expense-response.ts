export interface ExpenseResponse {
  id: number;
  description: string;
  cost: number;
  expenseDate: Date;
  categoryName: string;
  personName: string;
  goalId: number;

}
