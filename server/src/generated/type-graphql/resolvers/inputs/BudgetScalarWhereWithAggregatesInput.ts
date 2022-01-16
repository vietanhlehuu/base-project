import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumBudgetTypeWithAggregatesFilter } from "../inputs/EnumBudgetTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BudgetScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BudgetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BudgetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BudgetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BudgetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BudgetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBudgetTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumBudgetTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
