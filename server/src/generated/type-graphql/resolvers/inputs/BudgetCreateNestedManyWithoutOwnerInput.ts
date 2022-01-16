import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetCreateManyOwnerInputEnvelope } from "../inputs/BudgetCreateManyOwnerInputEnvelope";
import { BudgetCreateOrConnectWithoutOwnerInput } from "../inputs/BudgetCreateOrConnectWithoutOwnerInput";
import { BudgetCreateWithoutOwnerInput } from "../inputs/BudgetCreateWithoutOwnerInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.InputType("BudgetCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [BudgetCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: BudgetCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: BudgetCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => BudgetCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: BudgetCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereUniqueInput], {
    nullable: true
  })
  connect?: BudgetWhereUniqueInput[] | undefined;
}
