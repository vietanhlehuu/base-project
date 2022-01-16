import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetUpdateInput } from "../../../inputs/BudgetUpdateInput";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetUpdateInput, {
    nullable: false
  })
  data!: BudgetUpdateInput;

  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;
}
