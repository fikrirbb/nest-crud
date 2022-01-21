import { INJECTABLES } from '../../../../common/interfaces/injectables';
import { ModelEntity } from '../../domain/entities/model.entity';
import { ModelRepository } from '../../domain/repositories/model.repository';
import { ModelLocalDataSource } from '../datasources/model.local.datasource';
import {
  ICreateModel,
  IGetModelById,
  IGetModels,
} from '../../interfaces/model.interface';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ModelRepositoryImplementation implements ModelRepository {
  constructor(
    @Inject(INJECTABLES.datasources.ModelLocalDataSource)
    private ModelLocalDataSource: ModelLocalDataSource,
  ) { }

  async createModel(
    parameters: ICreateModel,
  ): Promise<ModelEntity> {
    return this.ModelLocalDataSource.createModel(parameters);
  }

  async getModels(parameters: IGetModels): Promise<ModelEntity[]> {
    return this.ModelLocalDataSource.getModels(parameters);
  }

  async getModelById({
    modelId,
  }: IGetModelById): Promise<ModelEntity | undefined> {
    return this.ModelLocalDataSource.getModelById({ modelId });
  }
}
