import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { ICreateModel } from '../../../interfaces/model.interface';
import { ModelEntity } from '../../entities/model.entity';
import { ModelRepository } from '../../repositories/model.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateModel {
  constructor(
    @Inject(INJECTABLES.repositories.ModelRepository)
    private repository: ModelRepository,
  ) { }

  async call(parameters: ICreateModel): Promise<ModelEntity> {
    return this.repository.createModel(parameters);
  }
}
