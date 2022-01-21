import { EntityManager } from "typeorm";
import { FactoryEntity } from "../domain/entities/factory.entity";
import { ModelEntity } from "../domain/entities/model.entity";
import {
  IPagination,
  ISort,
  IFilter,
} from "src/common/interfaces/common.interface";
import { BodyType } from "./bodytype.enum";
import { CountryEntity } from "src/modules/country/domain/entities/country.entity";
import { SortType } from "src/common/interfaces/common.enum";

export interface ICreateCar {
  factory: FactoryEntity;
  model: ModelEntity;
  country: CountryEntity;
  version: string;
  dateOfLaunch: Date;
  msrp: number;
  urlImage: string;
  bodyType: BodyType;
  doors: number;
  capacity: number;
  modelCode: string;
  bdLength: number;
  bdWidth: number;
  bdHeigth: number;
  wheelBase: number;
  threadFront: number;
  threadRear: number;
  bdInteriorLength: number;
  bdInteriorWidth: number;
  bdInteriorHeigth: number;
  bdWeigth?: number;
  engineModel: string;
  cylinder?: string;
  maxPowerPS: number;
  maxPowerKW: number;
  maxPowerRPM: number;
  maxTorqueKGM: number;
  maxTorqueNM: number;
  maxTorqueRPM?: number;
  displacement?: number;
  bore: number;
  stroke: number;
  ratioCompression?: number;
  charger?: number;
  fuelSupplyEquip?: number;
  fuelTankEquip: number;
  fuelType?: number;
  steeringSystem?: number;
  minTurningRadius: number;
  frontSuspenseSystem?: number;
  rearSuspenseSystem?: number;
  frontBrakeSystem?: number;
  rearBrakeSystem?: number;
  frontTyreSize: string;
  rearTyreSize: string;
  driveWheel?: string;
  transmission?: string;
  lsd?: string;
  firstGear?: number;
  secGear?: number;
  thirdGear?: number;
  fourthGear?: number;
  fifthGear?: number;
  finalDriveGearRatio?: number;
}

export interface IUpdateCar {
  carId: string;
  factory?: FactoryEntity;
  model?: ModelEntity;
  country?: CountryEntity;
  version?: string;
  dateOfLaunch?: Date;
  msrp?: number;
  urlImage?: string;
  bodyType?: BodyType;
  doors?: number;
  capacity?: number;
  modelCode?: string;
  bdLength?: number;
  bdWidth?: number;
  bdHeigth?: number;
  wheelBase?: number;
  threadFront?: number;
  threadRear?: number;
  bdInteriorLength?: number;
  bdInteriorWidth?: number;
  bdInteriorHeigth?: number;
  bdWeigth?: number;
  engineModel?: string;
  cylinder?: string;
  maxPowerPS?: number;
  maxPowerKW?: number;
  maxPowerRPM?: number;
  maxTorqueKGM?: number;
  maxTorqueNM?: number;
  maxTorqueRPM?: number;
  displacement?: number;
  bore?: number;
  stroke?: number;
  ratioCompression?: number;
  charger?: number;
  fuelSupplyEquip?: number;
  fuelTankEquip?: number;
  fuelType?: number;
  steeringSystem?: number;
  minTurningRadius?: number;
  frontSuspenseSystem?: number;
  rearSuspenseSystem?: number;
  frontBrakeSystem?: number;
  rearBrakeSystem?: number;
  frontTyreSize?: string;
  rearTyreSize?: string;
  driveWheel?: string;
  transmission?: string;
  lsd?: string;
  firstGear?: number;
  secGear?: number;
  thirdGear?: number;
  fourthGear?: number;
  fifthGear?: number;
  finalDriveGearRatio?: number;
}

export interface IUpdateCarWithEntity extends IUpdateCar {
  entityManager: EntityManager;
}

export interface IGetCars {
  filter?: IGetCarsFilter;
  sort?: ISort;
  pagination?: IPagination;
}

export interface IGetCarsFilter extends IFilter {
  version?: string;
}

export interface IGetCarById {
  carId: string;
}

export interface IGetCarsSort extends ISort {
  byName?: SortType;
}
