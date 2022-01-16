import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.ObjectType("BudgetMinAggregate", {
  isAbstract: true
})
export class BudgetMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => BudgetType, {
    nullable: true
  })
  type!: "INCOME" | "EXPENSE" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  value!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
