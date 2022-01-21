import {
  MIN_AMOUNT,
  MAX_PAGE,
  MAX_ITEMS_PER_PAGE,
} from '../../../common/common.const';
import { SortType } from '../../interfaces/common.enum';
import { IPagination } from '../../interfaces/common.interface';
import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { IsNumber, Min, Max } from 'class-validator';

registerEnumType(SortType, { name: 'SortType' });

@InputType()
export class PaginationInputType implements IPagination {
  @Field(() => Int)
  @IsNumber()
  @Min(MIN_AMOUNT)
  @Max(MAX_PAGE)
  readonly page!: number;

  @Field(() => Int)
  @IsNumber()
  @IsNumber()
  @Min(MIN_AMOUNT)
  @Max(MAX_ITEMS_PER_PAGE)
  readonly itemsPerPage!: number;
}
