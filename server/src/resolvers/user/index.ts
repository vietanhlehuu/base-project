import { NonEmptyArray } from "type-graphql";
import { LoginResolver } from "./login";
import { RegisterResolver } from "./register";
import { UserResolver } from "./user";

export const UserCrudResolvers = [
  LoginResolver,
  RegisterResolver,
  UserResolver,
] as NonEmptyArray<Function>;
