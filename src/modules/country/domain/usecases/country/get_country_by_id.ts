import { Inject, Injectable } from '@nestjs/common';
import { NotFound } from 'src/common/exceptions/exception';
import { INJECTABLES } from '../../../../../common/interfaces/injectables';

import { IGetCountryById } from '../../../interfaces/country.interface';
import { CountryEntity } from '../../entities/country.entity';
import { CountryRepository } from '../../repositories/country.repository';

@Injectable()
export class GetCountryById {
    constructor(
        @Inject(INJECTABLES.repositories.CountryRepository)
        private repository: CountryRepository,
    ) { }

    async call(parameters: IGetCountryById): Promise<CountryEntity | undefined> {
        const country = this.repository.getCountryById(parameters);
        var check = await country.then(items => { return !items })
        if (check) {
            throw new NotFound();
        }
        return country
    }
}
