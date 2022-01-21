import { PaginationEntity } from "../../domain/entity/common.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaginationObjectType implements PaginationEntity {
  @Field(() => Number)
  readonly count!: number;
}
