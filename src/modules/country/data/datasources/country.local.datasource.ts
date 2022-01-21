import { CountryModel } from "../../data/models/Country.model";
import {
  ICreateCountry,
  IGetCountryById,
  IGetCountries,
} from "../../interfaces/country.interface";
import { CreateCountryInputType } from "../../presentation/dto/country.input.type";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EntityManager } from "typeorm";

import { Injectable } from "@nestjs/common";

export abstract class CountryLocalDataSource {
  abstract createCountry(
    parameters: CreateCountryInputType
  ): Promise<CountryModel>;

  abstract getCountries(parameters: IGetCountries): Promise<CountryModel[]>;

  abstract getCountryById(
    parameters: IGetCountryById
  ): Promise<CountryModel | undefined>;

  abstract deleteCountry(parameters: IGetCountryById): Promise<void>;
}

@Injectable()
export class CountryLocalDataSourceImplementation
  implements CountryLocalDataSource
{
  constructor(
    @InjectRepository(CountryModel)
    private repository: Repository<CountryModel>,
    private entityManager: EntityManager
  ) {}

  async createCountry({
    ...parameters
  }: ICreateCountry): Promise<CountryModel> {
    return this.entityManager.save(CountryModel, parameters);
  }

  async getCountryById(
    parameters: IGetCountryById
  ): Promise<CountryModel | undefined> {
    return this.repository.findOne({
      where: { ...parameters },
    });
  }

  async getCountries(parameters: IGetCountries): Promise<CountryModel[]> {
    const repository = this.repository.createQueryBuilder("Country").select();

    return repository.getMany();
  }

  async deleteCountry(parameters: IGetCountryById): Promise<void> {
    await this.repository.delete(parameters);
  }
}
