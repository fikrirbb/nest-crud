import { Inject, Injectable } from '@nestjs/common';
import { NotFound } from 'src/common/exceptions/exception';
import { INJECTABLES } from '../../../../../common/interfaces/injectables';

import { IGetModelById } from '../../../interfaces/model.interface';
import { ModelEntity } from '../../entities/model.entity';
import { ModelRepository } from '../../repositories/model.repository';

@Injectable()
export class GetModelById {
    constructor(
        @Inject(INJECTABLES.repositories.ModelRepository)
        private repository: ModelRepository,
    ) { }

    async call(parameters: IGetModelById): Promise<ModelEntity | undefined> {
        const model = this.repository.getModelById(parameters);
        var check = await model.then(items => { return !items })
        if (check) {
            throw new NotFound();
        }
        return model
    }
}
