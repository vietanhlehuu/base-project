import React from "react";
import { useBudgetData } from "../../hooks/home/useBudgetData";
import ExpenseItem from "./ExpenseItem";
import IncomeItem from "./IncomeItem";

const BudgetList: React.FC = () => {
  const { expenseList, incomeList, totalIncome } = useBudgetData();
  return (
    <div className="grid max-w-5xl grid-cols-2 gap-4 mx-auto">
      <div>
        <h2 className="font-bold text-center uppercase text-[20px] text-income">
          Income
        </h2>
        <div className="mt-4">
          {incomeList.map((item) => (
            <IncomeItem key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-center uppercase text-[20px] text-expense">
          Expenses
        </h2>
        <div className="mt-4">
          {expenseList.map((item) => (
            <ExpenseItem key={item.id} data={item} totalIncome={totalIncome} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetList;
