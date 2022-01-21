import { INJECTABLES } from "../../../../../common/interfaces/injectables";

import { Inject, Injectable } from "@nestjs/common";
import { CarRepository } from "../../repositories/car.repository";
import {
  CarandTotalEntity,
  CarEntity,
  PaginatedCarsEntity,
} from "../../entities/car.entity";

@Injectable()
export class GetStatisticCars {
  constructor(
    @Inject(INJECTABLES.repositories.CarRepository)
    private repository: CarRepository
  ) {}

  async call(): Promise<CarandTotalEntity[]> {
    const car = await this.repository.countStatistic();
    return car;
  }
}
