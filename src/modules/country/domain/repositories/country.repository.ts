import {
  ICreateCountry,
  IGetCountryById,
  IGetCountries,
} from '../../interfaces/country.interface';
import { CountryEntity } from '../entities/country.entity';

export abstract class CountryRepository {
  abstract createCountry(
    parameters: ICreateCountry,
  ): Promise<CountryEntity>;

  abstract getCountries(parameters: IGetCountries): Promise<CountryEntity[]>;

  abstract getCountryById(
    parameters: IGetCountryById,
  ): Promise<CountryEntity | undefined>;
}
