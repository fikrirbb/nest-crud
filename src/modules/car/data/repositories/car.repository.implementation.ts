import { INJECTABLES } from "../../../../common/interfaces/injectables";
import {
  CarandTotalEntity,
  CarEntity,
  PaginatedCarsEntity,
} from "../../domain/entities/car.entity";
import { CarRepository } from "../../domain/repositories/car.repository";
import { CarLocalDataSource } from "../datasources/car.local.datasource";
import {
  ICreateCar,
  IGetCarById,
  IGetCars,
  IUpdateCarWithEntity,
} from "../../interfaces/car.interface";

import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CarRepositoryImplementation implements CarRepository {
  constructor(
    @Inject(INJECTABLES.datasources.CarLocalDataSource)
    private CarLocalDataSource: CarLocalDataSource
  ) {}

  async createCar(parameters: ICreateCar): Promise<CarEntity> {
    return this.CarLocalDataSource.createCar(parameters);
  }

  async updateCar(parameters: IUpdateCarWithEntity): Promise<CarEntity> {
    return this.CarLocalDataSource.updateCar(parameters);
  }

  async getCars(parameters: IGetCars): Promise<PaginatedCarsEntity> {
    return this.CarLocalDataSource.getCars(parameters);
  }

  async getCarById({ carId }: IGetCarById): Promise<CarEntity | undefined> {
    return this.CarLocalDataSource.getCarById({ carId });
  }

  async deleteCar(parameters: IGetCarById): Promise<void> {
    return this.CarLocalDataSource.deleteCar(parameters);
  }

  async countStatistic(): Promise<CarandTotalEntity[]> {
    return this.CarLocalDataSource.countStatistic();
  }
}
