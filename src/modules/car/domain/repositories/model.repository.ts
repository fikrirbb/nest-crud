import {
  ICreateModel,
  IGetModelById,
  IGetModels,
} from "../../interfaces/model.interface";
import { ModelEntity } from "../entities/model.entity";

export abstract class ModelRepository {
  abstract createModel(parameters: ICreateModel): Promise<ModelEntity>;

  abstract getModels(parameters: IGetModels): Promise<ModelEntity[]>;

  abstract getModelById(
    parameters: IGetModelById
  ): Promise<ModelEntity | undefined>;
}
