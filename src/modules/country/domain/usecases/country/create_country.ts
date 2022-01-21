import { INJECTABLES } from '../../../../../common/interfaces/injectables';
import { ICreateCountry } from '../../../interfaces/country.interface';
import { CountryEntity } from '../../entities/country.entity';
import { CountryRepository } from '../../repositories/country.repository';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateCountry {
  constructor(
    @Inject(INJECTABLES.repositories.CountryRepository)
    private repository: CountryRepository,
  ) { }

  async call(parameters: ICreateCountry): Promise<CountryEntity> {
    return this.repository.createCountry(parameters);
  }
}
