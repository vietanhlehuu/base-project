import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetCreateInput } from "../../../inputs/BudgetCreateInput";
import { BudgetUpdateInput } from "../../../inputs/BudgetUpdateInput";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: false
  })
  where!: BudgetWhereUniqueInput;

  @TypeGraphQL.Field(_type => BudgetCreateInput, {
    nullable: false
  })
  create!: BudgetCreateInput;

  @TypeGraphQL.Field(_type => BudgetUpdateInput, {
    nullable: false
  })
  update!: BudgetUpdateInput;
}
