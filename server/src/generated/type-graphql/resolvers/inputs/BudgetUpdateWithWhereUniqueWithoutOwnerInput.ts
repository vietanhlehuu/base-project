import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetUpdateWithoutOwnerInput } from "../inputs/BudgetUpdateWithoutOwnerInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.InputType("BudgetUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;

  @TypeGraphQL.Field(_type => BudgetUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: BudgetUpdateWithoutOwnerInput;
}
