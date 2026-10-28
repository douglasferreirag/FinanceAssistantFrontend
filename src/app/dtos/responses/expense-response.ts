export interface ExpenseResponse {
  id: number;
  description: string;
  cost: number;
  expenseDate: Date;
  categoryId: number;
  personId: number;
  goalId: number;

}
