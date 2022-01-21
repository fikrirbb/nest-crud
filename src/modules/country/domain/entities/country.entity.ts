import { CarEntity } from "../../../car/domain/entities/car.entity";

export class CountryEntity {
  countryId: string;
  name!: string;
  cars?: CarEntity[];
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
}
