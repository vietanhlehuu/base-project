import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetWhereInput } from "../inputs/BudgetWhereInput";

@TypeGraphQL.InputType("BudgetListRelationFilter", {
  isAbstract: true
})
export class BudgetListRelationFilter {
  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  every?: BudgetWhereInput | undefined;

  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  some?: BudgetWhereInput | undefined;

  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  none?: BudgetWhereInput | undefined;
}
