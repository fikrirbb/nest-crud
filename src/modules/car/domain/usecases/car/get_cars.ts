import { INJECTABLES } from "../../../../../common/interfaces/injectables";

import { Inject, Injectable } from "@nestjs/common";
import { CarRepository } from "../../repositories/car.repository";
import { IGetCars } from "src/modules/car/interfaces/car.interface";
import { PaginatedCarsEntity } from "../../entities/car.entity";

@Injectable()
export class GetCars {
  constructor(
    @Inject(INJECTABLES.repositories.CarRepository)
    private repository: CarRepository
  ) {}

  async call(parameters: IGetCars): Promise<PaginatedCarsEntity> {
    const payments = await this.repository.getCars(parameters);
    return payments;
  }
}
