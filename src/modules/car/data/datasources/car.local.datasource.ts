import { CarModel } from "../../data/models/car.model";
import {
  ICreateCar,
  IGetCarById,
  IGetCars,
  IUpdateCarWithEntity,
} from "../../interfaces/car.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, SelectQueryBuilder } from "typeorm";
import { EntityManager } from "typeorm";

import { Injectable } from "@nestjs/common";

interface PaginatedCarsModel {
  pagination: { count: number };
  cars: CarModel[];
}

interface CarandTotalsModel {
  factory_name?: string;
  country_name?: string;
  total?: number;
}
export abstract class CarLocalDataSource {
  abstract createCar(parameters: ICreateCar): Promise<CarModel>;

  abstract updateCar(parameters: IUpdateCarWithEntity): Promise<CarModel>;

  abstract getCars(parameters: IGetCars): Promise<PaginatedCarsModel>;

  abstract getCarById(parameters: IGetCarById): Promise<CarModel | undefined>;

  abstract deleteCar(parameters: IGetCarById): Promise<void>;

  abstract countStatistic(): Promise<CarandTotalsModel[]>;
}

@Injectable()
export class CarLocalDataSourceImplementation implements CarLocalDataSource {
  constructor(
    @InjectRepository(CarModel)
    private repository: Repository<CarModel>,
    private entityManager: EntityManager
  ) {}

  createQuery(): SelectQueryBuilder<CarModel> {
    const query = this.repository
      .createQueryBuilder("car")
      .select()
      .leftJoinAndSelect("car.factory", "factory")
      .leftJoinAndSelect("car.country", "country")
      .leftJoinAndSelect("car.model", "model");
    return query;
  }

  async createCar({ ...parameters }: ICreateCar): Promise<CarModel> {
    return this.entityManager.save(CarModel, parameters);
  }

  async updateCar({
    entityManager,
    ...parameters
  }: IUpdateCarWithEntity): Promise<CarModel> {
    return this.entityManager.save(CarModel, parameters);
  }

  async getCarById(parameters: IGetCarById): Promise<CarModel | undefined> {
    return this.repository.findOne({
      where: { ...parameters },
    });
  }

  async getCars(parameters: IGetCars): Promise<PaginatedCarsModel> {
    const query = this.createQuery();
    if (parameters) {
      if (parameters.sort) {
        const { byUpdatedAt, byCreatedAt } = parameters.sort;
        if (byCreatedAt) {
          query.orderBy("car.createdAt", byCreatedAt);
        }
        if (byUpdatedAt) {
          query.orderBy("car.updatedAt", byUpdatedAt);
        }
      }
      if (parameters.pagination) {
        const { itemsPerPage, page } = parameters.pagination;

        query.skip((page - 1) * itemsPerPage).take(itemsPerPage);
      }
    }

    const cars = await query.getMany();
    const count = cars.length;
    return {
      cars,
      pagination: {
        count,
      },
    };
  }

  async deleteCar(parameters: IGetCarById): Promise<void> {
    await this.repository.softDelete(parameters);
  }

  async countStatistic(): Promise<CarandTotalsModel[]> {
    const query = this.createQuery()
      .addSelect("count(car.carId) as total")
      .groupBy("car.factoryFactoryId")
      .addGroupBy("car.countryCountryId")
      .orderBy("country.name");

    const carsAndTotal = await query.getRawMany();
    console.log(carsAndTotal);
    return carsAndTotal;
  }
}
