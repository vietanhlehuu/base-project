import * as TypeGraphQL from "type-graphql";
import { Budget } from "../../../models/Budget";
import { User } from "../../../models/User";
import { UserBudgetArgs } from "./args/UserBudgetArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Budget], {
    nullable: false
  })
  async Budget(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBudgetArgs): Promise<Budget[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Budget(args);
  }
}
