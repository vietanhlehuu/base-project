import { budgetData } from "./../../valtio/budget";
import { useSnapshot } from "valtio";

export const useOverviewData = () => {
  const data = useSnapshot(budgetData);
  const income = data.budget
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.value, 0);
  const expenses = data.budget
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.value, 0);
  const expenseRate = ((expenses / (income || 1)) * 100).toFixed(2);

  const budget = (income - expenses).toFixed(2);

  return {
    income,
    expenses,
    expenseRate,
    budget,
  };
};
