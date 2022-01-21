import { IGetFactoryById } from "../../interfaces/factory.interface";
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
export class CreateFactoryInputType {
  @Field(() => String)
  @IsString()
  @MinLength(MIN_LENGTH)
  @MaxLength(MAX_LENGTH)
  name!: string;
}

@InputType()
export class GetFactoryByIdInputType implements IGetFactoryById {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  factoryId!: string;
}
