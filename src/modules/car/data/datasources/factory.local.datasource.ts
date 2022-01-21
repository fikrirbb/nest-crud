import { FactoryModel } from '../../data/models/factory.model';
import {
  ICreateFactory,
  IGetFactoryById,
  IGetFactories,
} from '../../interfaces/factory.interface';
import { CreateFactoryInputType } from '../../presentation/dto/factory.input.type'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { EntityManager } from 'typeorm';

import { Injectable } from '@nestjs/common';

export abstract class FactoryLocalDataSource {
  abstract createFactory(
    parameters: CreateFactoryInputType,
  ): Promise<FactoryModel>;

  abstract getFactories(parameters: IGetFactories): Promise<FactoryModel[]>;

  abstract getFactoryById(
    parameters: IGetFactoryById,
  ): Promise<FactoryModel | undefined>;

  abstract deleteFactory(parameters: IGetFactoryById): Promise<void>;
}

@Injectable()
export class FactoryLocalDataSourceImplementation
  implements FactoryLocalDataSource {
  constructor(
    @InjectRepository(FactoryModel)
    private repository: Repository<FactoryModel>,
    private entityManager: EntityManager
  ) { }

  createQuery(): SelectQueryBuilder<FactoryModel> {
    const query = this.repository
      .createQueryBuilder('factory')
      .select()
      .leftJoinAndSelect('factory.cars', 'cars');
    return query;
  }

  async createFactory({
    ...parameters
  }: ICreateFactory): Promise<FactoryModel> {
    return this.entityManager.save(FactoryModel, parameters);
  }

  async getFactoryById(
    parameters: IGetFactoryById,
  ): Promise<FactoryModel | undefined> {
    return this.repository.findOne({
      where: { ...parameters }
    });
  }

  async getFactories(parameters: IGetFactories): Promise<FactoryModel[]> {
    const query = this.createQuery()

    return query.getMany();
  }

  async deleteFactory(parameters: IGetFactoryById): Promise<void> {
    await this.repository.delete(parameters);
  }
}
