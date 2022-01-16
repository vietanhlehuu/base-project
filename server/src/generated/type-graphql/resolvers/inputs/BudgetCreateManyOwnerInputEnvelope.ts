import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BudgetCreateManyOwnerInput } from "../inputs/BudgetCreateManyOwnerInput";

@TypeGraphQL.InputType("BudgetCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class BudgetCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [BudgetCreateManyOwnerInput], {
    nullable: false
  })
  data!: BudgetCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
