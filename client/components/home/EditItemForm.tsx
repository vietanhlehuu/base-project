import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BudgetItem } from "../../types";
import budgetActions from "../../valtio/budget";

const schema: z.ZodSchema<BudgetItem> = z.object({
  id: z.string().nonempty(),
  type: z.union([z.literal("income"), z.literal("expense")]),
  description: z.string().nonempty(),
  value: z.number().min(0),
});

const EditItemForm: React.FC<{ onClose: () => void; value: BudgetItem }> = ({
  onClose,
  value,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<BudgetItem>({
    resolver: zodResolver(schema),
    defaultValues: value,
  });

  const onSubmit = (data: BudgetItem) => {
    budgetActions.editItem(data.id, data);
    reset();
    onClose();
  };

  const onCancel = () => {
    reset();
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid items-center justify-center grid-flow-col gap-2"
    >
      <input
        className={clsx(
          "p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus-visible:border-blue-500",
          {
            "!border-red-400": errors.description && touchedFields.description,
          }
        )}
        type="text"
        placeholder="Add description"
        {...register("description")}
        title={errors.description && errors.description.message}
      />
      <input
        className={clsx(
          "w-32 p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus-visible:border-blue-500",
          {
            "!border-red-400": errors.value && touchedFields.value,
          }
        )}
        type="number"
        placeholder="Value"
        {...register("value", {
          valueAsNumber: true,
        })}
        title={errors.value && errors.value.message}
      />
      <button
        type="submit"
        className="p-2 text-white bg-blue-400 border border-gray-400 rounded-md hover:bg-blue-300"
      >
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="p-2 text-black border border-gray-400 rounded-md hover:bg-blue-300"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
