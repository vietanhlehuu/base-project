import * as TypeGraphQL from "type-graphql";

export enum BudgetScalarFieldEnum {
  id = "id",
  description = "description",
  type = "type",
  value = "value",
  userId = "userId"
}
TypeGraphQL.registerEnumType(BudgetScalarFieldEnum, {
  name: "BudgetScalarFieldEnum",
  description: undefined,
});
