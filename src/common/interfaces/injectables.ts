export const INJECTABLES = {
  repositories: {
    FactoryRepository: "FactoryRepository",
    ModelRepository: "ModelRepository",
    CarRepository: "CarRepository",
    CountryRepository: "CountryRepository",
  },
  datasources: {
    FactoryLocalDataSource: "FactoryLocalDataSource",
    ModelLocalDataSource: "ModelLocalDataSource",
    CarLocalDataSource: "CarLocalDataSource",
    CountryLocalDataSource: "CountryLocalDataSource",
  },
  usecases: {
    //factory
    CreateFactory: "CreateFactory",
    GetFactories: "GetFactories",
    GetFactoryById: "GetFactoryById",
    //model
    CreateModel: "CreateModel",
    GetModels: "GetModels",
    GetModelById: "GetModelById",
    //country
    CreateCountry: "CreateCountry",
    GetCountries: "GetCountries",
    GetCountryById: "GetCountryById",
    //car
    CreateCar: "CreateCar",
    DeleteCar: "DeleteCar",
    UpdateCar: "UpdateCar",
    GetCarById: "GetCarById",
    GetCars: "GetCars",
    GetStatisticCars: "GetStatisticCars",
  },
};
