export interface ICreateFactory {
  name: string;
}

export interface IUpdateFactory {
  factoryId: string;
  name?: string;
}

export interface IGetFactories {}

export interface IGetFactoryById {
  factoryId: string;
}

export interface IDeleteFactory extends IGetFactoryById {}
