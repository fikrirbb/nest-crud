import { ObjectType, Field, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { PaginationEntity } from "src/common/domain/entity/common.entity";
import { PaginationObjectType } from "src/common/presentation/dto/common.object.type";
import { CountryEntity } from "src/modules/country/domain/entities/country.entity";
import { CountryObjectType } from "src/modules/country/presentation/dto/country.object.type";
import {
  CarandTotalEntity,
  CarEntity,
  PaginatedCarsEntity,
} from "../../domain/entities/car.entity";
import { FactoryEntity } from "../../domain/entities/factory.entity";
import { ModelEntity } from "../../domain/entities/model.entity";
import { BodyType } from "../../interfaces/bodytype.enum";
import { FactoryObjectType } from "./factory.object.type";
import { ModelObjectType } from "./model.object.type";

@ObjectType()
export class CarObjectType extends CarEntity {
  @Field(() => ID)
  carId!: string;

  @Field(() => CountryObjectType, { nullable: true })
  country!: CountryEntity;

  @Field(() => FactoryObjectType, { nullable: true })
  factory!: FactoryEntity;

  @Field(() => ModelObjectType, { nullable: true })
  model!: ModelEntity;

  @Field(() => String, { nullable: true })
  version!: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateOfLaunch!: Date;

  @Field(() => Number, { nullable: true })
  msrp!: number;

  @Field(() => String, { nullable: true })
  urlImage!: string;

  @Field(() => BodyType, { nullable: true })
  bodyType!: BodyType;

  @Field(() => Number, { nullable: true })
  doors!: number;

  @Field(() => Number, { nullable: true })
  capacity!: number;

  @Field(() => String, { nullable: true })
  modelCode!: string;

  @Field(() => Number, { nullable: true })
  bdLength!: number;

  @Field(() => Number, { nullable: true })
  bdWidth!: number;

  @Field(() => Number, { nullable: true })
  bdHeigth!: number;

  @Field(() => Number, { nullable: true })
  wheelBase!: number;

  @Field(() => Number, { nullable: true })
  threadFront!: number;

  @Field(() => Number, { nullable: true })
  threadRear!: number;

  @Field(() => Number, { nullable: true })
  bdInteriorLength!: number;

  @Field(() => Number, { nullable: true })
  bdInteriorWidth!: number;

  @Field(() => Number, { nullable: true })
  bdInteriorHeigth!: number;

  @Field(() => Number, { nullable: true })
  bdWeigth?: number;

  @Field(() => String, { nullable: true })
  engineModel!: string;

  @Field(() => String, { nullable: true })
  cylinder?: string;

  @Field(() => Number, { nullable: true })
  maxPowerPS!: number;

  @Field(() => Number, { nullable: true })
  maxPowerKW!: number;

  @Field(() => Number, { nullable: true })
  maxPowerRPM!: number;

  @Field(() => Number, { nullable: true })
  maxTorqueKGM!: number;

  @Field(() => Number, { nullable: true })
  maxTorqueNM!: number;

  @Field(() => Number, { nullable: true })
  maxTorqueRPM?: number;

  @Field(() => Number, { nullable: true })
  displacement?: number;

  @Field(() => Number, { nullable: true })
  bore!: number;

  @Field(() => Number, { nullable: true })
  stroke!: number;

  @Field(() => Number, { nullable: true })
  ratioCompression?: number;

  @Field(() => Number, { nullable: true })
  charger?: number;

  @Field(() => Number, { nullable: true })
  fuelSupplyEquip?: number;

  @Field(() => Number, { nullable: true })
  fuelTankEquip!: number;

  @Field(() => Number, { nullable: true })
  fuelType?: number;

  @Field(() => Number, { nullable: true })
  steeringSystem?: number;

  @Field(() => Number, { nullable: true })
  minTurningRadius!: number;

  @Field(() => Number, { nullable: true })
  frontSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  rearSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  frontBrakeSystem?: number;

  @Field(() => Number, { nullable: true })
  rearBrakeSystem?: number;

  @Field(() => String, { nullable: true })
  frontTyreSize!: string;

  @Field(() => String, { nullable: true })
  rearTyreSize!: string;

  @Field(() => String, { nullable: true })
  driveWheel?: string;

  @Field(() => String, { nullable: true })
  transmission?: string;

  @Field(() => String, { nullable: true })
  lsd?: string;

  @Field(() => Number, { nullable: true })
  firstGear?: number;

  @Field(() => Number, { nullable: true })
  secGear?: number;

  @Field(() => Number, { nullable: true })
  thirdGear?: number;

  @Field(() => Number, { nullable: true })
  fourthGear?: number;

  @Field(() => Number, { nullable: true })
  fifthGear?: number;

  @Field(() => Number, { nullable: true })
  finalDriveGearRatio?: number;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}

@ObjectType()
export class PaginatedCarsObjectType extends PaginatedCarsEntity {
  @Field(() => PaginationObjectType)
  pagination!: PaginationEntity;

  @Field(() => [CarObjectType])
  cars!: CarEntity[];
}

@ObjectType()
export class StatisticCarsObjectType {
  @Field(() => Number, { nullable: true })
  total!: Number;

  @Field(() => String, { nullable: true })
  factory_name?: string;

  @Field(() => String, { nullable: true })
  country_name?: string;
}
