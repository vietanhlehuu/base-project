import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetCreateManyOwnerInputEnvelope } from "../inputs/BudgetCreateManyOwnerInputEnvelope";
import { BudgetCreateOrConnectWithoutOwnerInput } from "../inputs/BudgetCreateOrConnectWithoutOwnerInput";
import { BudgetCreateWithoutOwnerInput } from "../inputs/BudgetCreateWithoutOwnerInput";
import { BudgetScalarWhereInput } from "../inputs/BudgetScalarWhereInput";
import { BudgetUpdateManyWithWhereWithoutOwnerInput } from "../inputs/BudgetUpdateManyWithWhereWithoutOwnerInput";
import { BudgetUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/BudgetUpdateWithWhereUniqueWithoutOwnerInput";
import { BudgetUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/BudgetUpsertWithWhereUniqueWithoutOwnerInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.InputType("BudgetUpdateManyWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [BudgetCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: BudgetCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: BudgetCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: BudgetUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => BudgetCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: BudgetCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereUniqueInput], {
    nullable: true
  })
  set?: BudgetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BudgetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereUniqueInput], {
    nullable: true
  })
  delete?: BudgetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetWhereUniqueInput], {
    nullable: true
  })
  connect?: BudgetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: BudgetUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: BudgetUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BudgetScalarWhereInput[] | undefined;
}
