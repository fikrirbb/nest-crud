import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import { CarEntity } from '../../domain/entities/car.entity';
import { FactoryEntity } from '../../domain/entities/factory.entity';
import { CarModel } from './car.model';

@Entity({ name: 'factory' })
export class FactoryModel extends FactoryEntity {
  @PrimaryGeneratedColumn('uuid')
  factoryId!: string;

  @Column({ length: 255 })
  name!: string;

  @OneToMany(() => CarModel, (car) => car.factory)
  cars?: CarEntity[];
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt?: Date;
}
