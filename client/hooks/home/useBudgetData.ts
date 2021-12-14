import { useOverviewData } from "./useOverviewData";
import { useSnapshot } from "valtio";
import { budgetData } from "../../valtio/budget";

export const useBudgetData = () => {
  const { income } = useOverviewData();
  const data = useSnapshot(budgetData);
  const incomeList = data.budget.filter((item) => item.type === "income");
  const expenseList = data.budget.filter((item) => item.type === "expense");

  return {
    expenseList,
    incomeList,
    totalIncome: income,
  };
};
