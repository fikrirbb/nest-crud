import { INJECTABLES } from "../../../../../common/interfaces/injectables";

import { Inject, Injectable } from "@nestjs/common";
import { CarRepository } from "../../repositories/car.repository";
import { IGetCarById } from "src/modules/car/interfaces/car.interface";

@Injectable()
export class DeleteCar {
  constructor(
    @Inject(INJECTABLES.repositories.CarRepository)
    private repository: CarRepository
  ) {}

  async call({ carId }: IGetCarById): Promise<void> {
    await this.repository.deleteCar({ carId });
  }
}
