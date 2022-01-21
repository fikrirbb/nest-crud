import { EntityManager } from 'typeorm';

export interface ICreateCountry {
  name: string;
}

export interface IGetCountries {

}

export interface IGetCountryById {
  countryId: string;
}
