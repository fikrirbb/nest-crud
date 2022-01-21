import { ModelModel } from '../../data/models/model.model';
import {
  ICreateModel,
  IGetModelById,
  IGetModels,
} from '../../interfaces/model.interface';
import { CreateModelInputType } from '../../presentation/dto/model.input.type'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityManager } from 'typeorm';

import { Injectable } from '@nestjs/common';

export abstract class ModelLocalDataSource {
  abstract createModel(
    parameters: CreateModelInputType,
  ): Promise<ModelModel>;

  abstract getModels(parameters: IGetModels): Promise<ModelModel[]>;

  abstract getModelById(
    parameters: IGetModelById,
  ): Promise<ModelModel | undefined>;

  abstract deleteModel(parameters: IGetModelById): Promise<void>;
}

@Injectable()
export class ModelLocalDataSourceImplementation
  implements ModelLocalDataSource {
  constructor(
    @InjectRepository(ModelModel)
    private repository: Repository<ModelModel>,
    private entityManager: EntityManager
  ) { }

  async createModel({
    ...parameters
  }: ICreateModel): Promise<ModelModel> {
    return this.entityManager.save(ModelModel, parameters);
  }

  async getModelById(
    parameters: IGetModelById,
  ): Promise<ModelModel | undefined> {
    return this.repository.findOne({
      where: { ...parameters }
    });
  }

  async getModels(parameters: IGetModels): Promise<ModelModel[]> {
    const repository = this.repository
      .createQueryBuilder('Model')
      .select()

    return repository.getMany();
  }

  async deleteModel(parameters: IGetModelById): Promise<void> {
    await this.repository.delete(parameters);
  }
}
