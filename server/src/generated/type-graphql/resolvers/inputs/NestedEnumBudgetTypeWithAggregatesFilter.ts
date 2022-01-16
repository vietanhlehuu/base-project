import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBudgetTypeFilter } from "../inputs/NestedEnumBudgetTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.InputType("NestedEnumBudgetTypeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumBudgetTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBudgetTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBudgetTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBudgetTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumBudgetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBudgetTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumBudgetTypeFilter | undefined;
}
