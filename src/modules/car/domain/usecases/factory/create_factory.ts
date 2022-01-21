import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { ICreateFactory } from '../../../interfaces/factory.interface';
import { FactoryEntity } from '../../entities/factory.entity';
import { FactoryRepository } from '../../repositories/factory.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateFactory {
  constructor(
    @Inject(INJECTABLES.repositories.FactoryRepository)
    private repository: FactoryRepository,
  ) { }

  async call(parameters: ICreateFactory): Promise<FactoryEntity> {
    return this.repository.createFactory(parameters);
  }
}
