import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBudgetInput } from "../inputs/UserCreateOrConnectWithoutBudgetInput";
import { UserCreateWithoutBudgetInput } from "../inputs/UserCreateWithoutBudgetInput";
import { UserUpdateWithoutBudgetInput } from "../inputs/UserUpdateWithoutBudgetInput";
import { UserUpsertWithoutBudgetInput } from "../inputs/UserUpsertWithoutBudgetInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBudgetInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBudgetInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBudgetInput, {
    nullable: true
  })
  create?: UserCreateWithoutBudgetInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBudgetInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBudgetInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBudgetInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBudgetInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBudgetInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBudgetInput | undefined;
}
