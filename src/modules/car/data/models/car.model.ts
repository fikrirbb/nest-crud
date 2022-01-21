import { CountryModel } from "src/modules/country/data/models/Country.model";
import { CountryEntity } from "src/modules/country/domain/entities/country.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";
import { CarEntity } from "../../domain/entities/car.entity";
import { FactoryEntity } from "../../domain/entities/factory.entity";
import { ModelEntity } from "../../domain/entities/model.entity";
import { BodyType } from "../../interfaces/bodytype.enum";
import { FactoryModel } from "./factory.model";
import { ModelModel } from "./model.model";

@Entity({ name: "car" })
export class CarModel extends CarEntity {
  @PrimaryGeneratedColumn("uuid")
  carId!: string;

  @ManyToOne(() => FactoryModel, (factory) => factory.cars)
  factory!: FactoryEntity;

  @ManyToOne(() => ModelModel, (model) => model.cars)
  model!: ModelEntity;

  @ManyToOne(() => CountryModel)
  country!: CountryEntity;

  @Column({ length: 255 })
  version!: string;

  @Column()
  dateOfLaunch!: Date;

  @Column({ type: "int" })
  msrp!: number;

  @Column({ length: 255 })
  urlImage!: string;

  @Column({ length: 255 })
  bodyType!: BodyType;

  @Column({ type: "int" })
  doors!: number;

  @Column({ type: "int" })
  capacity!: number;

  @Column({ length: 255 })
  modelCode!: string;

  @Column({ type: "int" })
  bdLength!: number;

  @Column({ type: "int" })
  bdWidth!: number;

  @Column({ type: "int" })
  bdHeigth!: number;

  @Column({ type: "int" })
  wheelBase!: number;

  @Column({ type: "int" })
  threadFront!: number;

  @Column({ type: "int" })
  threadRear!: number;

  @Column({ type: "int" })
  bdInteriorLength!: number;

  @Column({ type: "int" })
  bdInteriorWidth!: number;

  @Column({ type: "int" })
  bdInteriorHeigth!: number;

  @Column({ type: "int" })
  bdWeigth?: number;

  @Column({ length: 255 })
  engineModel!: string;

  @Column({ length: 255, nullable: true })
  cylinder?: string;

  @Column({ type: "int" })
  maxPowerPS!: number;

  @Column({ type: "int" })
  maxPowerKW!: number;

  @Column({ type: "int" })
  maxPowerRPM!: number;

  @Column({ type: "decimal" })
  maxTorqueKGM!: number;

  @Column({ type: "decimal" })
  maxTorqueNM!: number;

  @Column({ type: "int" })
  maxTorqueRPM?: number;

  @Column({ type: "int" })
  displacement?: number;

  @Column({ type: "decimal" })
  bore!: number;

  @Column({ type: "decimal" })
  stroke!: number;

  @Column({ type: "int", nullable: true })
  ratioCompression?: number;

  @Column({ type: "int", nullable: true })
  charger?: number;

  @Column({ type: "int", nullable: true })
  fuelSupplyEquip?: number;

  @Column({ type: "int" })
  fuelTankEquip!: number;

  @Column({ type: "int", nullable: true })
  fuelType?: number;

  @Column({ type: "int", nullable: true })
  steeringSystem?: number;

  @Column({ type: "decimal" })
  minTurningRadius!: number;

  @Column({ type: "int", nullable: true })
  frontSuspenseSystem?: number;

  @Column({ type: "int", nullable: true })
  rearSuspenseSystem?: number;

  @Column({ type: "int", nullable: true })
  frontBrakeSystem?: number;

  @Column({ type: "int", nullable: true })
  rearBrakeSystem?: number;

  @Column({ length: 255 })
  frontTyreSize!: string;

  @Column({ length: 255 })
  rearTyreSize!: string;

  @Column({ length: 255, nullable: true })
  driveWheel?: string;

  @Column({ length: 255, nullable: true })
  transmission?: string;

  @Column({ length: 255, nullable: true })
  lsd?: string;

  @Column({ type: "decimal", nullable: true })
  firstGear?: number;

  @Column({ type: "decimal", nullable: true })
  secGear?: number;

  @Column({ type: "decimal", nullable: true })
  thirdGear?: number;

  @Column({ type: "decimal", nullable: true })
  fourthGear?: number;

  @Column({ type: "decimal", nullable: true })
  fifthGear?: number;

  @Column({ type: "decimal", nullable: true })
  finalDriveGearRatio?: number;

  @CreateDateColumn({ name: "createdAt" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt?: Date;
}
