export interface ExpenseResponse {
  id: number;
  description: string;
  cost: number;
  expenseDate: Date;
  //categoryId: number;
  //personId: number;
  categoryName: string;
  personName: string;
  goalId: number;

}
