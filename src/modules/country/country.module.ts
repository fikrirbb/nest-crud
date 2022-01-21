import { CommonModule } from "../../common/common.module";
import { INJECTABLES } from "../../common/interfaces/injectables";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { CountryModel } from "./data/models/country.model";
import { CountryLocalDataSourceImplementation } from "./data/datasources/country.local.datasource";
import { CountryRepositoryImplementation } from "./data/repositories/country.repository.implementation";
import { CreateCountry } from "./domain/usecases/country/create_country";
import { GetCountries } from "./domain/usecases/country/get_countries";
import { GetCountryById } from "./domain/usecases/country/get_country_by_id";
import { CountryController } from "./country.controller";
import { CountryResolver } from "./presentation/resolvers/country.resolver";

const countryLocalDataSourceInjection = {
  provide: INJECTABLES.datasources.CountryLocalDataSource,
  useClass: CountryLocalDataSourceImplementation,
};

const countryRepositoryInjection = {
  provide: INJECTABLES.repositories.CountryRepository,
  useClass: CountryRepositoryImplementation,
};

const createCountryInjection = {
  provide: INJECTABLES.usecases.CreateCountry,
  useClass: CreateCountry,
};

const getCountriesInjection = {
  provide: INJECTABLES.usecases.GetCountries,
  useClass: GetCountries,
};

const getCountryByIdInjection = {
  provide: INJECTABLES.usecases.GetCountryById,
  useClass: GetCountryById,
};

@Module({
  imports: [TypeOrmModule.forFeature([CountryModel]), CommonModule],
  controllers: [CountryController],
  providers: [
    countryRepositoryInjection,
    countryLocalDataSourceInjection,
    createCountryInjection,
    getCountryByIdInjection,
    getCountriesInjection,
    CountryResolver,
  ],
  exports: [GetCountryById, getCountryByIdInjection],
})
export class CountryModule {}
