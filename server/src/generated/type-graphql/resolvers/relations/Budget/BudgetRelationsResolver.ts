import * as TypeGraphQL from "type-graphql";
import { Budget } from "../../../models/Budget";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Budget)
export class BudgetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() budget: Budget, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).budget.findUnique({
      where: {
        id: budget.id,
      },
    }).owner({});
  }
}
