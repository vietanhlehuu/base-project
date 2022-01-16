import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BudgetOrderByWithRelationInput } from "../../../inputs/BudgetOrderByWithRelationInput";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";
import { BudgetScalarFieldEnum } from "../../../../enums/BudgetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBudgetArgs {
  @TypeGraphQL.Field(_type => BudgetWhereInput, {
    nullable: true
  })
  where?: BudgetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BudgetOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BudgetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BudgetWhereUniqueInput, {
    nullable: true
  })
  cursor?: BudgetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BudgetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "description" | "type" | "value" | "userId"> | undefined;
}
