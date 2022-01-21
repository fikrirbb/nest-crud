import { CarModel } from "src/modules/car/data/models/car.model";
import { CarEntity } from "src/modules/car/domain/entities/car.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { CountryEntity } from "../../domain/entities/country.entity";

@Entity({ name: "country" })
export class CountryModel extends CountryEntity {
  @PrimaryGeneratedColumn("uuid")
  countryId!: string;

  @Column({ length: 255 })
  name!: string;

  @OneToMany(() => CarModel, (car) => car.country)
  cars?: CarEntity[];

  @CreateDateColumn({ name: "createdAt" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt?: Date;
}
