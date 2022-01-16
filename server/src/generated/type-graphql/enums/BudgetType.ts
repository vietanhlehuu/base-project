import * as TypeGraphQL from "type-graphql";

export enum BudgetType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE"
}
TypeGraphQL.registerEnumType(BudgetType, {
  name: "BudgetType",
  description: undefined,
});
