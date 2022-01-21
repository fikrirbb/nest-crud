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
import { ModelEntity } from '../../domain/entities/model.entity';
import { CarModel } from './car.model';

@Entity({ name: 'model' })
export class ModelModel extends ModelEntity {
  @PrimaryGeneratedColumn('uuid')
  modelId!: string;

  @Column({ length: 255 })
  name!: string;

  @OneToMany(() => CarModel, (car) => car.model)
  cars?: CarEntity[];
  
  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt?: Date;
}
