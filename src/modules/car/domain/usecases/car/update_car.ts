import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { ICreateCar, IUpdateCar } from '../../../interfaces/car.interface';
import { CarEntity } from '../../entities/car.entity';
import { CarRepository } from '../../repositories/car.repository';

import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { NotFound } from 'src/common/exceptions/exception';
import { GetCarById } from './get_car_by_id';

@Injectable()
export class UpdateCar {
  constructor(
    @Inject(INJECTABLES.repositories.CarRepository)
    private repository: CarRepository,
    @Inject(INJECTABLES.usecases.GetCarById)
    private getCarById: GetCarById,
    private connection: Connection,
  ) { }

  async call(parameters: IUpdateCar): Promise<CarEntity> {
    return this.connection.transaction(async (entityManager) => {
      await this.getCarById.call(parameters);
      await this.repository.updateCar({ entityManager, ...parameters });
      return this.repository.getCarById(parameters);
    });
  }
}
