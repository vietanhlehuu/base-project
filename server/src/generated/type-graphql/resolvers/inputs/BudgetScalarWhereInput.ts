import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumBudgetTypeFilter } from "../inputs/EnumBudgetTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BudgetScalarWhereInput", {
  isAbstract: true
})
export class BudgetScalarWhereInput {
  @TypeGraphQL.Field(_type => [BudgetScalarWhereInput], {
    nullable: true
  })
  AND?: BudgetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarWhereInput], {
    nullable: true
  })
  OR?: BudgetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarWhereInput], {
    nullable: true
  })
  NOT?: BudgetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBudgetTypeFilter, {
    nullable: true
  })
  type?: EnumBudgetTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  value?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
