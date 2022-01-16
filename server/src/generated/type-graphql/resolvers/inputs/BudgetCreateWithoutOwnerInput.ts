import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.InputType("BudgetCreateWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetCreateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BudgetType, {
    nullable: false
  })
  type!: "INCOME" | "EXPENSE";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  value!: number;
}
