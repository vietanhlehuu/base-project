import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetAvgOrderByAggregateInput } from "../inputs/BudgetAvgOrderByAggregateInput";
import { BudgetCountOrderByAggregateInput } from "../inputs/BudgetCountOrderByAggregateInput";
import { BudgetMaxOrderByAggregateInput } from "../inputs/BudgetMaxOrderByAggregateInput";
import { BudgetMinOrderByAggregateInput } from "../inputs/BudgetMinOrderByAggregateInput";
import { BudgetSumOrderByAggregateInput } from "../inputs/BudgetSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BudgetOrderByWithAggregationInput", {
  isAbstract: true
})
export class BudgetOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BudgetCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BudgetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BudgetAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BudgetAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BudgetMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BudgetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BudgetMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BudgetMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BudgetSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BudgetSumOrderByAggregateInput | undefined;
}
