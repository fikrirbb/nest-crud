import { Inject, Injectable } from '@nestjs/common';
import { NotFound } from 'src/common/exceptions/exception';
import { INJECTABLES } from '../../../../../common/interfaces/injectables';

import { IGetCarById } from '../../../interfaces/car.interface';
import { CarEntity } from '../../entities/car.entity';
import { CarRepository } from '../../repositories/car.repository';

@Injectable()
export class GetCarById {
    constructor(
        @Inject(INJECTABLES.repositories.CarRepository)
        private repository: CarRepository,
    ) { }

    async call(parameters: IGetCarById): Promise<CarEntity | undefined> {
        const car = this.repository.getCarById(parameters);
        var check = await car.then(items => { return !items })
        if (check) {
            throw new NotFound();
        }
        return car
    }
}
