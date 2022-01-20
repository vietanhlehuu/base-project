import { useBudgetData } from "../../valtio/budget";

export const useBudgetList = () => {
  const data = useBudgetData();
  const incomeList = data.budget.filter((item) => item.type === "income");
  const expenseList = data.budget.filter((item) => item.type === "expense");

  return {
    expenseList,
    incomeList,
  };
};
