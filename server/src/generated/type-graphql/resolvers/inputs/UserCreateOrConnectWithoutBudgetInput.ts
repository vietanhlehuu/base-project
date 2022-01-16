import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBudgetInput } from "../inputs/UserCreateWithoutBudgetInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBudgetInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBudgetInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBudgetInput, {
    nullable: false
  })
  create!: UserCreateWithoutBudgetInput;
}
