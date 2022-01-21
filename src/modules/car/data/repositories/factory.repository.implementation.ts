import { INJECTABLES } from '../../../../common/interfaces/injectables';
import { FactoryEntity } from '../../domain/entities/factory.entity';
import { FactoryRepository } from '../../domain/repositories/factory.repository';
import { FactoryLocalDataSource } from '../datasources/factory.local.datasource';
import {
  ICreateFactory,
  IGetFactoryById,
  IGetFactories,
} from '../../interfaces/factory.interface';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FactoryRepositoryImplementation implements FactoryRepository {
  constructor(
    @Inject(INJECTABLES.datasources.FactoryLocalDataSource)
    private FactoryLocalDataSource: FactoryLocalDataSource,
  ) { }

  async createFactory(
    parameters: ICreateFactory,
  ): Promise<FactoryEntity> {
    return this.FactoryLocalDataSource.createFactory(parameters);
  }

  async getFactories(parameters: IGetFactories): Promise<FactoryEntity[]> {
    return this.FactoryLocalDataSource.getFactories(parameters);
  }

  async getFactoryById({
    factoryId,
  }: IGetFactoryById): Promise<FactoryEntity | undefined> {
    return this.FactoryLocalDataSource.getFactoryById({ factoryId });
  }
}
