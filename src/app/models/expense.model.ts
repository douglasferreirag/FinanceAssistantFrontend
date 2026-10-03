import { Category } from "./category.model";

export interface Expense {
  id?: number;          // opcional, se o backend gerar
  description: string;
  cost: number;
  expenseDate: Date;  // pode ser Date se preferir
  category: Category;  // referência à categoria
}

