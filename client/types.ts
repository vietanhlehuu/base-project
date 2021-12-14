export type BudgetItem = {
  id: string;
  type: "income" | "expense";
  description: string;
  value: number;
};
