import { INJECTABLES } from "../../../../common/interfaces/injectables";
import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { Inject, UseGuards } from "@nestjs/common";
import { GetCountries } from "../../domain/usecases/country/get_countries";
import { CreateCountry } from "../../domain/usecases/country/create_country";
import { GetCountryById } from "../../domain/usecases/country/get_country_by_id";
import {
  CreateCountryInputType,
  GetCountryByIdInputType,
} from "../dto/country.input.type";
import { CountryEntity } from "../../domain/entities/country.entity";
import { CountryObjectType } from "../dto/country.object.type";

@Resolver("Country")
export class CountryResolver {
  constructor(
    @Inject(INJECTABLES.usecases.GetCountries)
    private getCountries: GetCountries,
    @Inject(INJECTABLES.usecases.CreateCountry)
    private createCountry: CreateCountry,
    @Inject(INJECTABLES.usecases.GetCountryById)
    private getCountryById: GetCountryById
  ) {}

  @Query(() => [CountryObjectType], { name: "countries" })
  async get(): Promise<CountryEntity[]> {
    return this.getCountries.call({});
  }

  @Query(() => CountryObjectType, { name: "country" })
  async getOne(
    @Args("input") input: GetCountryByIdInputType
  ): Promise<CountryEntity | undefined> {
    return this.getCountryById.call(input);
  }

  @Mutation(() => CountryObjectType, { name: "createCountry" })
  async create(
    @Args("input")
    input: CreateCountryInputType
  ): Promise<CountryEntity> {
    return this.createCountry.call(input);
  }
}
