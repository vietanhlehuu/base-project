import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBudgetInput } from "../inputs/UserCreateOrConnectWithoutBudgetInput";
import { UserCreateWithoutBudgetInput } from "../inputs/UserCreateWithoutBudgetInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBudgetInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBudgetInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBudgetInput, {
    nullable: true
  })
  create?: UserCreateWithoutBudgetInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBudgetInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBudgetInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
