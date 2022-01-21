import {
  IGetCarById,
  IGetCars,
  IGetCarsFilter,
  IGetCarsSort,
} from "../../interfaces/car.interface";
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { FactoryEntity } from "../../domain/entities/factory.entity";
import { ModelEntity } from "../../domain/entities/model.entity";
import { CountryEntity } from "src/modules/country/domain/entities/country.entity";
import { Type } from "class-transformer";
import { GetFactoryByIdInputType } from "./factory.input.type";
import { GetModelByIdInputType } from "./model.input.type";
import { BodyType } from "../../interfaces/bodytype.enum";
import { Field, InputType, ID, Int, registerEnumType } from "@nestjs/graphql";
import { SortType } from "src/common/interfaces/common.enum";
import { PaginationInputType } from "src/common/presentation/dto/common.input.type";
import { IPagination } from "src/common/interfaces/common.interface";
import { GetCountryByIdInputType } from "src/modules/country/presentation/dto/country.input.type";

registerEnumType(BodyType, { name: "BodyType" });

@InputType()
export class CreateCarInputType {
  @Field(() => GetFactoryByIdInputType)
  factory!: FactoryEntity;

  @Field(() => GetModelByIdInputType)
  model!: ModelEntity;

  @Field(() => GetCountryByIdInputType)
  country!: CountryEntity;

  @Field(() => String)
  @IsString()
  version!: string;

  @Field(() => String)
  @IsString()
  readonly dateOfLaunch!: Date;

  @Field(() => Number, { nullable: true })
  @IsInt()
  readonly msrp!: number;

  @Field(() => String)
  @IsString()
  readonly urlImage!: string;

  @Field(() => BodyType)
  @IsEnum(BodyType)
  readonly bodyType!: BodyType;

  @Field(() => Number)
  @IsInt()
  readonly doors!: number;

  @Field(() => Number)
  @IsInt()
  readonly capacity!: number;

  @Field(() => String)
  @IsString()
  readonly modelCode!: string;

  @Field(() => Number)
  @IsInt()
  readonly bdLength!: number;

  @Field(() => Number)
  @IsInt()
  readonly bdWidth!: number;

  @Field(() => Number)
  @IsInt()
  readonly bdHeigth!: number;

  @Field(() => Number)
  @IsInt()
  readonly wheelBase!: number;

  @Field(() => Number)
  @IsInt()
  readonly threadFront!: number;

  @Field(() => Number)
  @IsInt()
  readonly threadRear!: number;

  @Field(() => Number)
  @IsInt()
  readonly bdInteriorLength!: number;

  @Field(() => Number)
  @IsInt()
  readonly bdInteriorWidth!: number;

  @Field(() => Number)
  @IsInt()
  readonly bdInteriorHeigth!: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsInt()
  readonly bdWeigth?: number;

  @Field(() => String)
  @IsString()
  readonly engineModel!: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly cylinder?: string;

  @Field(() => Number)
  @IsInt()
  readonly maxPowerPS!: number;

  @Field(() => Number)
  @IsInt()
  readonly maxPowerKW!: number;

  @Field(() => Number)
  @IsInt()
  readonly maxPowerRPM!: number;

  @Field(() => Number)
  @IsNumber()
  readonly maxTorqueKGM!: number;

  @Field(() => Number)
  @IsInt()
  readonly maxTorqueNM!: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxTorqueRPM?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly displacement?: number;

  @Field(() => Number)
  @IsNumber()
  readonly bore!: number;

  @Field(() => Number)
  @IsNumber()
  readonly stroke!: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly ratioCompression?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly charger?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fuelSupplyEquip?: number;

  @Field(() => Number)
  @IsInt()
  readonly fuelTankEquip!: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fuelType?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly steeringSystem?: number;

  @Field(() => Number)
  @IsNumber()
  readonly minTurningRadius!: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly frontSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly rearSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly frontBrakeSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly rearBrakeSystem?: number;

  @Field(() => String)
  @IsString()
  readonly frontTyreSize!: string;

  @Field(() => String)
  @IsString()
  readonly rearTyreSize!: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly driveWheel?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly transmission?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly lsd?: string;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly firstGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly secGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly thirdGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fourthGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fifthGear?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly finalDriveGearRatio?: number;
}

@InputType()
export class UpdateCarInputType {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  carId!: string;

  @Field(() => GetFactoryByIdInputType)
  factory?: FactoryEntity;

  @Field(() => GetModelByIdInputType)
  model?: ModelEntity;

  @Field(() => GetCountryByIdInputType)
  country?: CountryEntity;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly version?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly dateOfLaunch?: Date;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly msrp?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly urlImage?: string;

  @Field(() => BodyType, { nullable: true })
  @IsEnum(BodyType)
  @IsOptional()
  readonly bodyType?: BodyType;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly doors?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly capacity?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly modelCode?: string;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdLength?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdWidth?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdHeigth?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly wheelBase?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly threadFront?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly threadRear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdInteriorLength?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdInteriorWidth?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly bdInteriorHeigth?: number;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsInt()
  readonly bdWeigth?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly engineModel?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly cylinder?: string;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxPowerPS?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxPowerKW?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxPowerRPM?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly maxTorqueKGM?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxTorqueNM?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly maxTorqueRPM?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly displacement?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly bore?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly stroke?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly ratioCompression?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly charger?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fuelSupplyEquip?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fuelTankEquip?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fuelType?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly steeringSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly minTurningRadius?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly frontSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly rearSuspenseSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly frontBrakeSystem?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly rearBrakeSystem?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly frontTyreSize?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly rearTyreSize?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly driveWheel?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly transmission?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly lsd?: string;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly firstGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly secGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly thirdGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fourthGear?: number;

  @Field(() => Number, { nullable: true })
  @IsInt()
  @IsOptional()
  readonly fifthGear?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  readonly finalDriveGearRatio?: number;
}

@InputType()
export class GetCarbyIdInputType implements IGetCarById {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  carId!: string;
}

@InputType()
export class GetCarsSortInputType implements IGetCarsSort {
  @Field(() => SortType, { nullable: true })
  @IsOptional()
  @IsEnum(SortType)
  readonly byName?: SortType;
}

@InputType()
export class GetCarsFilterInputType implements IGetCarsFilter {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  readonly version?: string;
}

@InputType()
export class GetCarsInputType implements IGetCars {
  @Field(() => GetCarsFilterInputType, { nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GetCarsFilterInputType)
  filter?: IGetCarsFilter;

  @Field(() => GetCarsSortInputType, { nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GetCarsSortInputType)
  sort?: IGetCarsSort;

  @Field(() => PaginationInputType, { nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PaginationInputType)
  pagination?: IPagination;
}
