import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetCreateWithoutOwnerInput } from "../inputs/BudgetCreateWithoutOwnerInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.InputType("BudgetCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;

  @TypeGraphQL.Field(_type => BudgetCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: BudgetCreateWithoutOwnerInput;
}
