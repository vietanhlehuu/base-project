import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import { IsNotEmpty, NotContains } from "class-validator";
import bcrypt from "bcrypt";
import { User } from "../../generated/type-graphql";
import { Context } from "../../types";
import { SALT_ROUNDS } from "../../configs";

@InputType({ description: "New user data" })
class RegisterInput implements Partial<User> {
  @Field()
  @IsNotEmpty()
  @NotContains(" ")
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;
}

@Resolver(() => User)
export class RegisterResolver {
  @Mutation((_returns) => User, {
    nullable: false,
  })
  async register(
    @Ctx() ctx: Context,
    @Arg("data") newUserData: RegisterInput
  ): Promise<User> {
    const existingUser = await ctx.prisma.user.findUnique({
      where: {
        username: newUserData.username,
      },
    });

    if (existingUser) {
      throw new Error("User is existing");
    }

    const hashedPassword = await bcrypt.hash(newUserData.password, SALT_ROUNDS);

    return ctx.prisma.user.create({
      data: {
        ...newUserData,
        password: hashedPassword,
      },
    });
  }
}
