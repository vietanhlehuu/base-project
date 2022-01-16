import React, { useState } from "react";
import { BudgetItem } from "../../types";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import budgetActions from "../../valtio/budget";
import clsx from "clsx";
import EditItemForm from "./EditItemForm";

const IncomeItem: React.FC<{ data: BudgetItem }> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="group grid grid-cols-[1fr_auto] gap-2 border-t last:border-b border-gray-300 p-4 even:bg-gradient-to-r from-white via-gray-100 to-white items-center relative overflow-hidden">
      <p>{data.description}</p>
      <p className="text-income">+{data.value}</p>
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

export default IncomeItem;
