import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetAvgAggregate } from "../outputs/BudgetAvgAggregate";
import { BudgetCountAggregate } from "../outputs/BudgetCountAggregate";
import { BudgetMaxAggregate } from "../outputs/BudgetMaxAggregate";
import { BudgetMinAggregate } from "../outputs/BudgetMinAggregate";
import { BudgetSumAggregate } from "../outputs/BudgetSumAggregate";

@TypeGraphQL.ObjectType("AggregateBudget", {
  isAbstract: true
})
export class AggregateBudget {
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
