import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  where?: BudgetWhereInput | undefined;
}
