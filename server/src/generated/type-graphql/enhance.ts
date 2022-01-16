import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Budget: crudResolvers.BudgetCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Budget: {
    budget: actionResolvers.FindUniqueBudgetResolver,
    findFirstBudget: actionResolvers.FindFirstBudgetResolver,
    budgets: actionResolvers.FindManyBudgetResolver,
    createBudget: actionResolvers.CreateBudgetResolver,
    createManyBudget: actionResolvers.CreateManyBudgetResolver,
    deleteBudget: actionResolvers.DeleteBudgetResolver,
    updateBudget: actionResolvers.UpdateBudgetResolver,
    deleteManyBudget: actionResolvers.DeleteManyBudgetResolver,
    updateManyBudget: actionResolvers.UpdateManyBudgetResolver,
    upsertBudget: actionResolvers.UpsertBudgetResolver,
    aggregateBudget: actionResolvers.AggregateBudgetResolver,
    groupByBudget: actionResolvers.GroupByBudgetResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  }
};
const crudResolversInfo = {
  Budget: ["budget", "findFirstBudget", "budgets", "createBudget", "createManyBudget", "deleteBudget", "updateBudget", "deleteManyBudget", "updateManyBudget", "upsertBudget", "aggregateBudget", "groupByBudget"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
  FindUniqueBudgetArgs: ["where"],
  FindFirstBudgetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBudgetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBudgetArgs: ["data"],
  CreateManyBudgetArgs: ["data", "skipDuplicates"],
  DeleteBudgetArgs: ["where"],
  UpdateBudgetArgs: ["data", "where"],
  DeleteManyBudgetArgs: ["where"],
  UpdateManyBudgetArgs: ["data", "where"],
  UpsertBudgetArgs: ["where", "create", "update"],
  AggregateBudgetArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBudgetArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Budget: relationResolvers.BudgetRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Budget: ["owner"],
  User: ["Budget"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Budget: ["id", "description", "type", "value", "userId"],
  User: ["id", "username"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateBudget: ["_count", "_avg", "_sum", "_min", "_max"],
  BudgetGroupBy: ["id", "description", "type", "value", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "username", "password", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  BudgetCountAggregate: ["id", "description", "type", "value", "userId", "_all"],
  BudgetAvgAggregate: ["value"],
  BudgetSumAggregate: ["value"],
  BudgetMinAggregate: ["id", "description", "type", "value", "userId"],
  BudgetMaxAggregate: ["id", "description", "type", "value", "userId"],
  UserCount: ["Budget"],
  UserCountAggregate: ["id", "username", "password", "_all"],
  UserMinAggregate: ["id", "username", "password"],
  UserMaxAggregate: ["id", "username", "password"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  BudgetWhereInput: ["AND", "OR", "NOT", "id", "description", "type", "value", "owner", "userId"],
  BudgetOrderByWithRelationInput: ["id", "description", "type", "value", "owner", "userId"],
  BudgetWhereUniqueInput: ["id"],
  BudgetOrderByWithAggregationInput: ["id", "description", "type", "value", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  BudgetScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "type", "value", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "password", "Budget"],
  UserOrderByWithRelationInput: ["id", "username", "password", "Budget"],
  UserWhereUniqueInput: ["id", "username"],
  UserOrderByWithAggregationInput: ["id", "username", "password", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "password"],
  BudgetCreateInput: ["id", "description", "type", "value", "owner"],
  BudgetUpdateInput: ["id", "description", "type", "value", "owner"],
  BudgetCreateManyInput: ["id", "description", "type", "value", "userId"],
  BudgetUpdateManyMutationInput: ["id", "description", "type", "value"],
  UserCreateInput: ["id", "username", "password", "Budget"],
  UserUpdateInput: ["id", "username", "password", "Budget"],
  UserCreateManyInput: ["id", "username", "password"],
  UserUpdateManyMutationInput: ["id", "username", "password"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumBudgetTypeFilter: ["equals", "in", "notIn", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  BudgetCountOrderByAggregateInput: ["id", "description", "type", "value", "userId"],
  BudgetAvgOrderByAggregateInput: ["value"],
  BudgetMaxOrderByAggregateInput: ["id", "description", "type", "value", "userId"],
  BudgetMinOrderByAggregateInput: ["id", "description", "type", "value", "userId"],
  BudgetSumOrderByAggregateInput: ["value"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumBudgetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BudgetListRelationFilter: ["every", "some", "none"],
  BudgetOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "username", "password"],
  UserMaxOrderByAggregateInput: ["id", "username", "password"],
  UserMinOrderByAggregateInput: ["id", "username", "password"],
  UserCreateNestedOneWithoutBudgetInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumBudgetTypeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutBudgetInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BudgetCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  BudgetUpdateManyWithoutOwnerInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumBudgetTypeFilter: ["equals", "in", "notIn", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumBudgetTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCreateWithoutBudgetInput: ["id", "username", "password"],
  UserCreateOrConnectWithoutBudgetInput: ["where", "create"],
  UserUpsertWithoutBudgetInput: ["update", "create"],
  UserUpdateWithoutBudgetInput: ["id", "username", "password"],
  BudgetCreateWithoutOwnerInput: ["id", "description", "type", "value"],
  BudgetCreateOrConnectWithoutOwnerInput: ["where", "create"],
  BudgetCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  BudgetUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  BudgetUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  BudgetUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  BudgetScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "type", "value", "userId"],
  BudgetCreateManyOwnerInput: ["id", "description", "type", "value"],
  BudgetUpdateWithoutOwnerInput: ["id", "description", "type", "value"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

