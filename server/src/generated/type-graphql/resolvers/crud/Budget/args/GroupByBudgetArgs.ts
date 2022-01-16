import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetOrderByWithAggregationInput } from "../../../inputs/BudgetOrderByWithAggregationInput";
import { BudgetScalarWhereWithAggregatesInput } from "../../../inputs/BudgetScalarWhereWithAggregatesInput";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";
import { BudgetScalarFieldEnum } from "../../../../enums/BudgetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  where?: BudgetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BudgetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BudgetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "description" | "type" | "value" | "userId">;

  @TypeGraphQL.Field(_type => BudgetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BudgetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
