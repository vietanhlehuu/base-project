import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetUpdateManyMutationInput } from "../../../inputs/BudgetUpdateManyMutationInput";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetUpdateManyMutationInput, {
    nullable: false
  })
  data!: BudgetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  where?: BudgetWhereInput | undefined;
}
