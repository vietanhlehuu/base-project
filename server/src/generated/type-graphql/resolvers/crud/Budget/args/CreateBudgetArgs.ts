import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetCreateInput } from "../../../inputs/BudgetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetCreateInput, {
    nullable: false
  })
  data!: BudgetCreateInput;
}
