import { INJECTABLES } from "../../../../../common/interfaces/injectables";

import { Inject, Injectable } from "@nestjs/common";
import { CarRepository } from "../../repositories/car.repository";
import { GetModelById } from "../model/get_model_by_id";
import { GetFactoryById } from "../factory/get_factory_by_id";
import { GetCountryById } from "src/modules/country/domain/usecases/country/get_country_by_id";
import { ICreateCar } from "src/modules/car/interfaces/car.interface";
import { CarEntity } from "../../entities/car.entity";

@Injectable()
export class CreateCar {
  constructor(
    @Inject(INJECTABLES.repositories.CarRepository)
    private repository: CarRepository,
    @Inject(INJECTABLES.usecases.GetModelById)
    private getModelById: GetModelById,
    @Inject(INJECTABLES.usecases.GetFactoryById)
    private getFactoryById: GetFactoryById,
    @Inject(INJECTABLES.usecases.GetCountryById)
    private getCountryById: GetCountryById
  ) {}

  async call({
    model: { modelId },
    factory: { factoryId },
    country: { countryId },
    ...parameters
  }: ICreateCar): Promise<CarEntity> {
    const model = await this.getModelById.call({ modelId });
    const country = await this.getCountryById.call({ countryId });
    const factory = await this.getFactoryById.call({ factoryId });

    const params = {
      model,
      country,
      factory,
      ...parameters,
    };
    return this.repository.createCar(params);
  }
}
