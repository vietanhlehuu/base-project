import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetAvgAggregate } from "../outputs/BudgetAvgAggregate";
import { BudgetCountAggregate } from "../outputs/BudgetCountAggregate";
import { BudgetMaxAggregate } from "../outputs/BudgetMaxAggregate";
import { BudgetMinAggregate } from "../outputs/BudgetMinAggregate";
import { BudgetSumAggregate } from "../outputs/BudgetSumAggregate";
import { BudgetType } from "../../enums/BudgetType";

@TypeGraphQL.ObjectType("BudgetGroupBy", {
  isAbstract: true
})
export class BudgetGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => BudgetCountAggregate, {
    nullable: true
  })
  _count!: BudgetCountAggregate | null;

  @TypeGraphQL.Field(_type => BudgetAvgAggregate, {
    nullable: true
  })
  _avg!: BudgetAvgAggregate | null;

  @TypeGraphQL.Field(_type => BudgetSumAggregate, {
    nullable: true
  })
  _sum!: BudgetSumAggregate | null;

  @TypeGraphQL.Field(_type => BudgetMinAggregate, {
    nullable: true
  })
  _min!: BudgetMinAggregate | null;

  @TypeGraphQL.Field(_type => BudgetMaxAggregate, {
    nullable: true
  })
  _max!: BudgetMaxAggregate | null;
}
