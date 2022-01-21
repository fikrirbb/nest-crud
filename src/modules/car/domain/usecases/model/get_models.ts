import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { IGetModels } from '../../../interfaces/model.interface';
import { ModelEntity } from '../../entities/model.entity';
import { ModelRepository } from '../../repositories/model.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetModels {
    constructor(
        @Inject(INJECTABLES.repositories.ModelRepository)
        private repository: ModelRepository,
    ) { }

    async call(parameters: IGetModels): Promise<ModelEntity[]> {
        return this.repository.getModels(parameters);
    }
}
