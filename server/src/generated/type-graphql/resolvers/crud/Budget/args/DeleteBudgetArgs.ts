import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;
}
