import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.InputType("NestedEnumBudgetTypeFilter", {
  isAbstract: true
})
export class NestedEnumBudgetTypeFilter {
  @TypeGraphQL.Field(_type => BudgetType, {
    nullable: true
  })
  equals?: "INCOME" | "EXPENSE" | undefined;

  @TypeGraphQL.Field(_type => [BudgetType], {
    nullable: true
  })
  in?: Array<"INCOME" | "EXPENSE"> | undefined;

  @TypeGraphQL.Field(_type => [BudgetType], {
    nullable: true
  })
  notIn?: Array<"INCOME" | "EXPENSE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBudgetTypeFilter, {
    nullable: true
  })
  not?: NestedEnumBudgetTypeFilter | undefined;
}
