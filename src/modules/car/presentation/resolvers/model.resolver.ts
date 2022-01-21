import { INJECTABLES } from "../../../../common/interfaces/injectables";
import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { Inject, UseGuards } from "@nestjs/common";
import { GetModels } from "../../domain/usecases/model/get_models";
import { CreateModel } from "../../domain/usecases/model/create_model";
import { GetModelById } from "../../domain/usecases/model/get_model_by_id";
import {
  CreateModelInputType,
  GetModelByIdInputType,
} from "../dto/model.input.type";
import { ModelEntity } from "../../domain/entities/model.entity";
import { ModelObjectType } from "../dto/model.object.type";

@Resolver("Model")
export class ModelResolver {
  constructor(
    @Inject(INJECTABLES.usecases.GetModels)
    private getModels: GetModels,
    @Inject(INJECTABLES.usecases.CreateModel)
    private createModel: CreateModel,
    @Inject(INJECTABLES.usecases.GetModelById)
    private getModelById: GetModelById
  ) {}

  @Query(() => [ModelObjectType], { name: "models" })
  async get(): Promise<ModelEntity[]> {
    return this.getModels.call({});
  }

  @Query(() => ModelObjectType, { name: "model" })
  async getOne(
    @Args("input") input: GetModelByIdInputType
  ): Promise<ModelEntity | undefined> {
    return this.getModelById.call(input);
  }

  @Mutation(() => ModelObjectType, { name: "createModel" })
  async create(
    @Args("input")
    input: CreateModelInputType
  ): Promise<ModelEntity> {
    return this.createModel.call(input);
  }
}
