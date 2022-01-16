import { Args, ArgsType, Ctx, Field, Query, Resolver } from "type-graphql";
import { IsNotEmpty, NotContains } from "class-validator";
import { User } from "../../generated/type-graphql";
import { Context } from "../../types";

@ArgsType()
class UserArgs implements Partial<User> {
  @Field()
  @IsNotEmpty()
  @NotContains(" ")
  username!: string;
}

@Resolver()
export class UserResolver {
  @Query((_returns) => User, {
    nullable: true,
  })
  async user(
    @Ctx() ctx: Context,
    @Args() { username }: UserArgs
  ): Promise<User | null> {
    return ctx.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }
}
