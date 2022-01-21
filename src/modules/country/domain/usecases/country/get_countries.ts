import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { IGetCountries } from '../../../interfaces/country.interface';
import { CountryEntity } from '../../entities/country.entity';
import { CountryRepository } from '../../repositories/country.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetCountries {
    constructor(
        @Inject(INJECTABLES.repositories.CountryRepository)
        private repository: CountryRepository,
    ) { }

    async call(parameters: IGetCountries): Promise<CountryEntity[]> {
        return this.repository.getCountries(parameters);
    }
}
