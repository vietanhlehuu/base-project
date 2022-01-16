import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumBudgetTypeFieldUpdateOperationsInput } from "../inputs/EnumBudgetTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBudgetInput } from "../inputs/UserUpdateOneRequiredWithoutBudgetInput";

@TypeGraphQL.InputType("BudgetUpdateInput", {
  isAbstract: true
})
export class BudgetUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBudgetTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumBudgetTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBudgetInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutBudgetInput | undefined;
}
