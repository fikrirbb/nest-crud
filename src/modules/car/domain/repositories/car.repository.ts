import {
  ICreateCar,
  IGetCarById,
  IGetCars,
  IUpdateCarWithEntity,
} from "../../interfaces/car.interface";
import {
  CarandTotalEntity,
  CarEntity,
  PaginatedCarsEntity,
} from "../entities/car.entity";

export abstract class CarRepository {
  abstract createCar(parameters: ICreateCar): Promise<CarEntity>;

  abstract updateCar(parameters: IUpdateCarWithEntity): Promise<CarEntity>;

  abstract getCars(parameters: IGetCars): Promise<PaginatedCarsEntity>;

  abstract getCarById(parameters: IGetCarById): Promise<CarEntity | undefined>;

  abstract deleteCar(parameters: IGetCarById): Promise<void>;

  abstract countStatistic(): Promise<CarandTotalEntity[]>;
}
