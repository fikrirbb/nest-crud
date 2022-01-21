import { CountryEntity } from "src/modules/country/domain/entities/country.entity";
import { PaginationEntity } from "../../../../../src/common/domain/entity/common.entity";
import { BodyType } from "../../interfaces/bodytype.enum";
import { FactoryEntity } from "./factory.entity";
import { ModelEntity } from "./model.entity";

export class CarEntity {
  carId!: string;
  country!: CountryEntity;
  factory!: FactoryEntity;
  model!: ModelEntity;
  version!: string;
  dateOfLaunch!: Date;
  msrp!: number;
  urlImage!: string;
  bodyType!: BodyType;
  doors!: number;
  capacity!: number;
  modelCode!: string;
  bdLength!: number;
  bdWidth!: number;
  bdHeigth!: number;
  wheelBase!: number;
  threadFront!: number;
  threadRear!: number;
  bdInteriorLength!: number;
  bdInteriorWidth!: number;
  bdInteriorHeigth!: number;
  bdWeigth?: number;
  engineModel!: string;
  cylinder?: string;
  maxPowerPS!: number;
  maxPowerKW!: number;
  maxPowerRPM!: number;
  maxTorqueKGM!: number;
  maxTorqueNM!: number;
  maxTorqueRPM?: number;
  displacement?: number;
  bore!: number;
  stroke!: number;
  ratioCompression?: number;
  charger?: number;
  fuelSupplyEquip?: number;
  fuelTankEquip!: number;
  fuelType?: number;
  steeringSystem?: number;
  minTurningRadius!: number;
  frontSuspenseSystem?: number;
  rearSuspenseSystem?: number;
  frontBrakeSystem?: number;
  rearBrakeSystem?: number;
  frontTyreSize!: string;
  rearTyreSize!: string;
  driveWheel?: string;
  transmission?: string;
  lsd?: string;
  firstGear?: number;
  secGear?: number;
  thirdGear?: number;
  fourthGear?: number;
  fifthGear?: number;
  finalDriveGearRatio?: number;
  createdAt!: Date;
  updatedAt!: Date;
}

export class CarandTotalEntity {
  factory_name?: string;
  country_name?: string;
  total?: number;
}

export class PaginatedCarsEntity {
  pagination!: PaginationEntity;
  cars!: CarEntity[];
}
