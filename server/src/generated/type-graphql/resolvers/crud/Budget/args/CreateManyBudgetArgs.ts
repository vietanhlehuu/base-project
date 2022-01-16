import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetCreateManyInput } from "../../../inputs/BudgetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBudgetArgs {
  @TypeGraphQL.Field(_type => [BudgetCreateManyInput], {
    nullable: false
  })
  data!: BudgetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
