import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBudgetArgs } from "./args/AggregateBudgetArgs";
import { Budget } from "../../../models/Budget";
import { AggregateBudget } from "../../outputs/AggregateBudget";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Budget)
export class AggregateBudgetResolver {
  @TypeGraphQL.Query(_returns => AggregateBudget, {
    nullable: false
  })
  async aggregateBudget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBudgetArgs): Promise<AggregateBudget> {
    return getPrismaFromContext(ctx).budget.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
