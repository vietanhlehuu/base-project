import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetCreateWithoutOwnerInput } from "../inputs/BudgetCreateWithoutOwnerInput";
import { BudgetUpdateWithoutOwnerInput } from "../inputs/BudgetUpdateWithoutOwnerInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.InputType("BudgetUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;

  @TypeGraphQL.Field(_type => BudgetUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: BudgetUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => BudgetCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: BudgetCreateWithoutOwnerInput;
}
