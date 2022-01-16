import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetScalarWhereInput } from "../inputs/BudgetScalarWhereInput";
import { BudgetUpdateManyMutationInput } from "../inputs/BudgetUpdateManyMutationInput";

@TypeGraphQL.InputType("BudgetUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class BudgetUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => BudgetScalarWhereInput, {
    nullable: false
  })
  where!: BudgetScalarWhereInput;

  @TypeGraphQL.Field(_type => BudgetUpdateManyMutationInput, {
    nullable: false
  })
  data!: BudgetUpdateManyMutationInput;
}
