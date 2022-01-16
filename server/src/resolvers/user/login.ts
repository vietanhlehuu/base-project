import jwt from "jsonwebtoken";
import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Resolver,
} from "type-graphql";
import { IsNotEmpty, NotContains } from "class-validator";
import bcrypt from "bcrypt";
import { Context } from "../../types";
import { User } from "../../generated/type-graphql";
import { SECRET } from "../../configs";

@ArgsType()
class LoginArgs {
  @Field()
  @IsNotEmpty()
  username!: string;

  @Field()
  @IsNotEmpty()
  password!: string;
}

@ObjectType()
class LoginData {
  @Field(() => User)
  user!: User;

  @Field()
  token!: string;
}

@Resolver()
export class LoginResolver {
  @Mutation((_returns) => LoginData, {
    nullable: false,
  })
  async login(
    @Ctx() ctx: Context,
    @Args() { username, password }: LoginArgs
  ): Promise<LoginData> {
    const user = await ctx.prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) {
      throw new Error("User is not existing");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("username or password is wrong");
    }

    const token = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: "1d",
    });

    return {
      user,
      token: token,
    };
  }
}
