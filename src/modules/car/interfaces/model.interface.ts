export interface ICreateModel {
  name: string;
}

export interface IUpdateModel {
  modelId: string;
  name?: string;
}

export interface IGetModels {}

export interface IGetModelById {
  modelId: string;
}

export interface IDeleteModel extends IGetModelById {}
