import { CommonModule } from "../../common/common.module";
import { INJECTABLES } from "../../common/interfaces/injectables";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { FactoryModel } from "./data/models/factory.model";
import { FactoryLocalDataSourceImplementation } from "./data/datasources/factory.local.datasource";
import { FactoryRepositoryImplementation } from "./data/repositories/factory.repository.implementation";
import { CreateFactory } from "./domain/usecases/factory/create_factory";
import { GetFactories } from "./domain/usecases/factory/get_factories";
import { GetFactoryById } from "./domain/usecases/factory/get_factory_by_id";
import { ModelLocalDataSourceImplementation } from "./data/datasources/model.local.datasource";
import { ModelRepositoryImplementation } from "./data/repositories/model.repository.implementation";
import { CreateModel } from "./domain/usecases/model/create_model";
import { GetModels } from "./domain/usecases/model/get_models";
import { GetModelById } from "./domain/usecases/model/get_model_by_id";
import { ModelModel } from "./data/models/model.model";
import { CarModel } from "./data/models/car.model";
import { CarLocalDataSourceImplementation } from "./data/datasources/car.local.datasource";
import { CarRepositoryImplementation } from "./data/repositories/car.repository.implementation";
import { UpdateCar } from "./domain/usecases/car/update_car";
import { GetCarById } from "./domain/usecases/car/get_car_by_id";
import { FactoryResolver } from "./presentation/resolvers/factory.resolver";
import { ModelResolver } from "./presentation/resolvers/model.resolver";
import { CarResolver } from "./presentation/resolvers/car.resolver";
import { GetCars } from "./domain/usecases/car/get_cars";
import { DeleteCar } from "./domain/usecases/car/delete_car";
import { CreateCar } from "./domain/usecases/car/create_car";
import { CountryModule } from "../country/country.module";
import { GetStatisticCars } from "./domain/usecases/car/get_statistic_cars";

const factoryLocalDataSourceInjection = {
  provide: INJECTABLES.datasources.FactoryLocalDataSource,
  useClass: FactoryLocalDataSourceImplementation,
};

const factoryRepositoryInjection = {
  provide: INJECTABLES.repositories.FactoryRepository,
  useClass: FactoryRepositoryImplementation,
};

const modelLocalDataSourceInjection = {
  provide: INJECTABLES.datasources.ModelLocalDataSource,
  useClass: ModelLocalDataSourceImplementation,
};

const modelRepositoryInjection = {
  provide: INJECTABLES.repositories.ModelRepository,
  useClass: ModelRepositoryImplementation,
};

const carLocalDataSourceInjection = {
  provide: INJECTABLES.datasources.CarLocalDataSource,
  useClass: CarLocalDataSourceImplementation,
};

const carRepositoryInjection = {
  provide: INJECTABLES.repositories.CarRepository,
  useClass: CarRepositoryImplementation,
};

const createFactoryInjection = {
  provide: INJECTABLES.usecases.CreateFactory,
  useClass: CreateFactory,
};

const getFactoriesInjection = {
  provide: INJECTABLES.usecases.GetFactories,
  useClass: GetFactories,
};

const getFactoryByIdInjection = {
  provide: INJECTABLES.usecases.GetFactoryById,
  useClass: GetFactoryById,
};

const createModelInjection = {
  provide: INJECTABLES.usecases.CreateModel,
  useClass: CreateModel,
};

const getModelsInjection = {
  provide: INJECTABLES.usecases.GetModels,
  useClass: GetModels,
};

const getModelByIdInjection = {
  provide: INJECTABLES.usecases.GetModelById,
  useClass: GetModelById,
};

const getCarByIdInjection = {
  provide: INJECTABLES.usecases.GetCarById,
  useClass: GetCarById,
};

const getCarsInjection = {
  provide: INJECTABLES.usecases.GetCars,
  useClass: GetCars,
};

const getStatisticCarsInjection = {
  provide: INJECTABLES.usecases.GetStatisticCars,
  useClass: GetStatisticCars,
};

const updateCarInjection = {
  provide: INJECTABLES.usecases.UpdateCar,
  useClass: UpdateCar,
};

const deleteCarInjection = {
  provide: INJECTABLES.usecases.DeleteCar,
  useClass: DeleteCar,
};

const createCarInjection = {
  provide: INJECTABLES.usecases.CreateCar,
  useClass: CreateCar,
};

@Module({
  imports: [
    TypeOrmModule.forFeature([FactoryModel, ModelModel, CarModel]),
    CommonModule,
    CountryModule,
  ],
  providers: [
    factoryRepositoryInjection,
    factoryLocalDataSourceInjection,
    modelRepositoryInjection,
    modelLocalDataSourceInjection,
    carRepositoryInjection,
    carLocalDataSourceInjection,
    createFactoryInjection,
    getFactoryByIdInjection,
    getFactoriesInjection,
    createModelInjection,
    getModelByIdInjection,
    getModelsInjection,
    getCarByIdInjection,
    updateCarInjection,
    getCarsInjection,
    deleteCarInjection,
    createCarInjection,
    getStatisticCarsInjection,
    FactoryResolver,
    ModelResolver,
    CarResolver,
  ],
})
export class CarModule {}
