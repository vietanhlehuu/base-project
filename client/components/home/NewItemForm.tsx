import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BudgetItem } from "../../types";
import budgetActions from "../../valtio/budget";

type FormInputs = Omit<BudgetItem, "id">;

const schema: z.ZodSchema<FormInputs> = z.object({
  type: z.union([z.literal("income"), z.literal("expense")]),
  description: z.string().nonempty(),
  value: z.number().min(0),
});

const NewItemForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    budgetActions.addItem(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid items-center justify-center grid-flow-col gap-2"
    >
      <select
        className={clsx(
          "p-2 border-2 border-gray-300 rounded-md focus-visible:outline-none focus-visible:border-blue-500",
          {
            "!border-red-400": errors.type,
          }
        )}
        defaultValue="income"
        {...register("type")}
      >
        <option value="income">+</option>
        <option value="expense">-</option>
      </select>
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
        Submit
      </button>
    </form>
  );
};

export default NewItemForm;
