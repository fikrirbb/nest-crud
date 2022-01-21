import {
  ICreateFactory,
  IGetFactoryById,
  IGetFactories,
} from '../../interfaces/factory.interface';
import { FactoryEntity } from '../entities/factory.entity';

export abstract class FactoryRepository {
  abstract createFactory(
    parameters: ICreateFactory,
  ): Promise<FactoryEntity>;

  abstract getFactories(parameters: IGetFactories): Promise<FactoryEntity[]>;

  abstract getFactoryById(
    parameters: IGetFactoryById,
  ): Promise<FactoryEntity | undefined>;
}
