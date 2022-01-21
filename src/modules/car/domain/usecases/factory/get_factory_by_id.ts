import { Inject, Injectable } from '@nestjs/common';
import { NotFound } from 'src/common/exceptions/exception';
import { INJECTABLES } from '../../../../../common/interfaces/injectables';

import { IGetFactoryById } from '../../../interfaces/factory.interface';
import { FactoryEntity } from '../../entities/factory.entity';
import { FactoryRepository } from '../../repositories/factory.repository';

@Injectable()
export class GetFactoryById {
    constructor(
        @Inject(INJECTABLES.repositories.FactoryRepository)
        private repository: FactoryRepository,
    ) { }

    async call(parameters: IGetFactoryById): Promise<FactoryEntity | undefined> {
        const factory = this.repository.getFactoryById(parameters);
        var check = await factory.then(items => { return !items })
        if (check) {
            throw new NotFound();
        }
        return factory
    }
}
