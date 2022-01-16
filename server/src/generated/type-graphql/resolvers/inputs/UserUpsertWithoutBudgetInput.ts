import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBudgetInput } from "../inputs/UserCreateWithoutBudgetInput";
import { UserUpdateWithoutBudgetInput } from "../inputs/UserUpdateWithoutBudgetInput";

@TypeGraphQL.InputType("UserUpsertWithoutBudgetInput", {
  isAbstract: true
})
export class UserUpsertWithoutBudgetInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBudgetInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBudgetInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBudgetInput, {
    nullable: false
  })
  create!: UserCreateWithoutBudgetInput;
}
