import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBudgetArgs } from "./args/GroupByBudgetArgs";
import { Budget } from "../../../models/Budget";
import { BudgetGroupBy } from "../../outputs/BudgetGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Budget)
export class GroupByBudgetResolver {
  @TypeGraphQL.Query(_returns => [BudgetGroupBy], {
    nullable: false
  })
  async groupByBudget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBudgetArgs): Promise<BudgetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).budget.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
