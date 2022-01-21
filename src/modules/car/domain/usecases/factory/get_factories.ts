import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { IGetFactories } from '../../../interfaces/factory.interface';
import { FactoryEntity } from '../../entities/factory.entity';
import { FactoryRepository } from '../../repositories/factory.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetFactories {
    constructor(
        @Inject(INJECTABLES.repositories.FactoryRepository)
        private repository: FactoryRepository,
    ) { }

    async call(parameters: IGetFactories): Promise<FactoryEntity[]> {
        return this.repository.getFactories(parameters);
    }
}
