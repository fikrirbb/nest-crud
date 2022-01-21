import { INJECTABLES } from "../../../../common/interfaces/injectables";
import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { Inject, UseGuards } from "@nestjs/common";
import { GetFactories } from "../../domain/usecases/factory/get_factories";
import { CreateFactory } from "../../domain/usecases/factory/create_factory";
import { GetFactoryById } from "../../domain/usecases/factory/get_factory_by_id";
import {
  CreateFactoryInputType,
  GetFactoryByIdInputType,
} from "../dto/factory.input.type";
import { FactoryEntity } from "../../domain/entities/factory.entity";
import { FactoryObjectType } from "../dto/factory.object.type";

@Resolver("Factory")
export class FactoryResolver {
  constructor(
    @Inject(INJECTABLES.usecases.GetFactories)
    private getFactories: GetFactories,
    @Inject(INJECTABLES.usecases.CreateFactory)
    private createFactory: CreateFactory,
    @Inject(INJECTABLES.usecases.GetFactoryById)
    private getFactoryById: GetFactoryById
  ) {}

  @Query(() => [FactoryObjectType], { name: "factories" })
  async get(): Promise<FactoryEntity[]> {
    return this.getFactories.call({});
  }

  @Query(() => FactoryObjectType, { name: "factory" })
  async getOne(
    @Args("input") input: GetFactoryByIdInputType
  ): Promise<FactoryEntity | undefined> {
    return this.getFactoryById.call(input);
  }

  @Mutation(() => FactoryObjectType, { name: "createFactory" })
  async create(
    @Args("input")
    input: CreateFactoryInputType
  ): Promise<FactoryEntity> {
    return this.createFactory.call(input);
  }
}
