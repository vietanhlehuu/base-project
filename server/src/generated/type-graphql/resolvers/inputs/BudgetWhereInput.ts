import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumBudgetTypeFilter } from "../inputs/EnumBudgetTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BudgetWhereInput", {
  isAbstract: true
})
export class BudgetWhereInput {
  @TypeGraphQL.Field(_type => [BudgetWhereInput], {
    nullable: true
  })
  AND?: BudgetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereInput], {
    nullable: true
  })
  OR?: BudgetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereInput], {
    nullable: true
  })
  NOT?: BudgetWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
