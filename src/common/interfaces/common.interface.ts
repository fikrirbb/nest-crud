import { SortType } from './common.enum';

export interface IPagination {
  page?: number;
  itemsPerPage?: number;
}

export interface ISort {
  byCreatedAt?: SortType;
  byUpdatedAt?: SortType;
}

export interface IFilter {
  createdAtFrom?: Date;
  createdAtTo?: Date;
  updatedAtFrom?: Date;
  updatedAtTo?: Date;
}
