import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { BudgetType } from "../enums/BudgetType";

@TypeGraphQL.ObjectType("Budget", {
  isAbstract: true
})
export class Budget {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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

  owner?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
