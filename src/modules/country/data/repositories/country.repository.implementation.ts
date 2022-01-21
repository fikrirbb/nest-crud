import { INJECTABLES } from '../../../../common/interfaces/injectables';
import { CountryEntity } from '../../domain/entities/country.entity';
import { CountryRepository } from '../../domain/repositories/country.repository';
import { CountryLocalDataSource } from '../datasources/country.local.datasource';
import {
  ICreateCountry,
  IGetCountryById,
  IGetCountries,
} from '../../interfaces/country.interface';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CountryRepositoryImplementation implements CountryRepository {
  constructor(
    @Inject(INJECTABLES.datasources.CountryLocalDataSource)
    private CountryLocalDataSource: CountryLocalDataSource,
  ) { }

  async createCountry(
    parameters: ICreateCountry,
  ): Promise<CountryEntity> {
    return this.CountryLocalDataSource.createCountry(parameters);
  }

  async getCountries(parameters: IGetCountries): Promise<CountryEntity[]> {
    return this.CountryLocalDataSource.getCountries(parameters);
  }

  async getCountryById({
    countryId,
  }: IGetCountryById): Promise<CountryEntity | undefined> {
    return this.CountryLocalDataSource.getCountryById({ countryId });
  }
}
