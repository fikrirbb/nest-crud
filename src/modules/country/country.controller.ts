import { INJECTABLES } from '../../common/interfaces/injectables';
import { Controller, Inject, Get, Post, Body, Param } from "@nestjs/common";
import { CountryEntity } from './domain/entities/country.entity';
import { CountryRepository } from './domain/repositories/country.repository';
import {
    IGetCountries,
    ICreateCountry,
    IGetCountryById
} from './interfaces/country.interface';
import { CreateCountryInputType } from './presentation/dto/country.input.type'
import { GetCountryById } from './domain/usecases/country/get_country_by_id';

@Controller('country')
export class CountryController {
    constructor(
        @Inject(INJECTABLES.repositories.CountryRepository)
        private repository: CountryRepository,
        @Inject(INJECTABLES.usecases.GetCountryById)
        private getCountryById: GetCountryById,
    ) { }

    @Get()
    findAll(parameters: IGetCountries): Promise<CountryEntity[]> {
        return this.repository.getCountries(parameters);
    }

    @Post()
    create(@Body() parameters: CreateCountryInputType): Promise<CountryEntity> {
        let pars: ICreateCountry = parameters
        return this.repository.createCountry(pars);
    }

    @Get(':countryId')
    findOne(@Param() parameters): Promise<CountryEntity | undefined> {
        let pars: IGetCountryById = parameters
        return this.getCountryById.call(pars);
    }
}