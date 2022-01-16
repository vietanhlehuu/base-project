import { proxy, useSnapshot } from "valtio";
import { BudgetItem } from "../types";

const budgetData = proxy<{ budget: BudgetItem[] }>({
  budget: [
    {
      id: "1",
      description: "Income sample",
      value: 20_000,
      type: "income",
    },
    {
      id: "2",
      description: "Expense sample",
      value: 10_000,
      type: "expense",
    },
  ],
});

export const useBudgetData = () => {
  return useSnapshot(budgetData);
};

const addItem = (item: Omit<BudgetItem, "id">) => {
  const id = Math.random().toString(36).slice(2, 9);
  budgetData.budget.push({
    ...item,
    id,
  });
};

const editItem = (id: BudgetItem["id"], updatedItem: BudgetItem) => {
  const oldItemIdx = budgetData.budget.findIndex((item) => item.id === id);
  if (oldItemIdx === -1) {
    return;
  }
  budgetData.budget[oldItemIdx] = {
    ...updatedItem,
    id,
  };
};

const deleteItem = (id: BudgetItem["id"]) => {
  const itemIdx = budgetData.budget.findIndex((item) => item.id === id);
  budgetData.budget.splice(itemIdx, 1);
};

const budgetActions = {
  addItem,
  editItem,
  deleteItem,
};

export default budgetActions;
