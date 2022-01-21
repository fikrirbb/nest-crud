import { INJECTABLES } from "../../../../common/interfaces/injectables";
import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";

import { Inject, UseGuards } from "@nestjs/common";
import { GetCarById } from "../../domain/usecases/car/get_car_by_id";
import { UpdateCar } from "../../domain/usecases/car/update_car";
import { CreateCar } from "../../domain/usecases/car/create_car";
import { GetCars } from "../../domain/usecases/car/get_cars";
import { DeleteCar } from "../../domain/usecases/car/delete_car";
import {
  CarObjectType,
  PaginatedCarsObjectType,
  StatisticCarsObjectType,
} from "../dto/car.object.type";
import {
  CreateCarInputType,
  GetCarbyIdInputType,
  GetCarsFilterInputType,
  GetCarsInputType,
  GetCarsSortInputType,
  UpdateCarInputType,
} from "../dto/car.input.type";
import {
  CarandTotalEntity,
  CarEntity,
  PaginatedCarsEntity,
} from "../../domain/entities/car.entity";
import { GetStatisticCars } from "../../domain/usecases/car/get_statistic_cars";

@Resolver("Car")
export class CarResolver {
  constructor(
    @Inject(INJECTABLES.usecases.CreateCar)
    private createCar: CreateCar,
    @Inject(INJECTABLES.usecases.GetCarById)
    private getCarById: GetCarById,
    @Inject(INJECTABLES.usecases.GetCars)
    private getCars: GetCars,
    @Inject(INJECTABLES.usecases.GetStatisticCars)
    private getStatisticCars: GetStatisticCars,
    @Inject(INJECTABLES.usecases.UpdateCar)
    private updateCar: UpdateCar,
    @Inject(INJECTABLES.usecases.DeleteCar)
    private deleteCar: DeleteCar
  ) {}

  @Mutation(() => CarObjectType, { name: "createCar" })
  async create(@Args("input") input: CreateCarInputType): Promise<CarEntity> {
    return this.createCar.call(input);
  }

  @Query(() => CarObjectType, { name: "carById" })
  async getOne(
    @Args("input") input: GetCarbyIdInputType
  ): Promise<CarEntity | undefined> {
    return this.getCarById.call(input);
  }

  @Query(() => PaginatedCarsObjectType, { name: "cars" })
  async get(
    @Args("input") input: GetCarsInputType
  ): Promise<PaginatedCarsEntity> {
    return this.getCars.call(input);
  }

  @Query(() => [StatisticCarsObjectType], { name: "carStatistic" })
  async getStatistic(): Promise<CarandTotalEntity[]> {
    return this.getStatisticCars.call();
  }

  @Mutation(() => CarObjectType, { name: "updateCar" })
  async update(@Args("input") input: UpdateCarInputType): Promise<CarEntity> {
    return this.updateCar.call(input);
  }

  @Mutation(() => Boolean, { name: "deleteCar", nullable: true })
  async delete(@Args("input") input: GetCarbyIdInputType): Promise<boolean> {
    this.deleteCar.call(input);
    return true;
  }
}
