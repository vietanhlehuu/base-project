import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.InputType("EnumBudgetTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBudgetTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BudgetType, {
    nullable: true
  })
  set?: "INCOME" | "EXPENSE" | undefined;
}
