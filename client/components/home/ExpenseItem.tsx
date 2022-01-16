import React, { useState } from "react";
import { BudgetItem } from "../../types";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import budgetActions from "../../valtio/budget";
import EditItemForm from "./EditItemForm";
import clsx from "clsx";

const ExpenseItem: React.FC<{ data: BudgetItem; totalIncome: number }> = ({
  data,
  totalIncome,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseRate = ((data.value / (totalIncome || 1)) * 100).toFixed(2);
  return (
    <div className="relative group grid grid-cols-[1fr_auto_70px] gap-2 border-t last:border-b border-gray-300 p-4 even:bg-gradient-to-r from-white via-gray-100 to-white items-center overflow-hidden">
      <p>{data.description}</p>
      <p className="text-expense">-{data.value}</p>
      <span className="p-1 text-xs text-white rounded-md justify-self-end bg-expense-light">
        {totalIncome ? `${expenseRate}%` : "--"}
      </span>
      <div className="absolute top-0 right-0 grid items-center h-full grid-flow-col gap-2 px-2 transition-all duration-200 translate-x-full bg-white group-hover:translate-x-0">
        <i
          className="w-8 cursor-pointer hover:opacity-80"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <PencilAltIcon />
        </i>
        <i
          className="w-8 text-red-500 cursor-pointer hover:opacity-80"
          onClick={() => {
            budgetActions.deleteItem(data.id);
          }}
        >
          <TrashIcon />
        </i>
      </div>
      <div
        className={clsx(
          "bg-white absolute flex items-center justify-start inset-0 translate-y-full transition-all duration-300",
          {
            "!translate-y-0": isEditing,
          }
        )}
      >
        <EditItemForm
          value={data}
          onClose={() => {
            setIsEditing(false);
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseItem;
