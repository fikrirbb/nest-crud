import { IGetModelById } from "../../interfaces/model.interface";
import {
  ObjectType,
  Field,
  ID,
  InputType,
  GraphQLISODateTime,
} from "@nestjs/graphql";
import { MIN_LENGTH, MAX_LENGTH } from "../../../../common/common.const";

import { IsString, IsNotEmpty, MinLength, MaxLength } from "class-validator";

@InputType()
export class CreateModelInputType {
  @Field(() => String)
  @IsString()
  @MinLength(MIN_LENGTH)
  @MaxLength(MAX_LENGTH)
  name!: string;
}

@InputType()
export class GetModelByIdInputType implements IGetModelById {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  modelId!: string;
}
