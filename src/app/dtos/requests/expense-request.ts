import { CategoryRequest } from "./category-request.js";
import { PersonRequest } from "./person-request.js";

export interface ExpenseRequest {
  description: string;
  cost: number;
  expenseDate: Date;
  category: CategoryRequest;
  person: PersonRequest;
}
