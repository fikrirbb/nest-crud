import { IGetCountryById } from "../../interfaces/country.interface";
import { IsNotEmpty, IsString } from "class-validator";
import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCountryInputType {
  @Field(() => String)
  @IsString()
  readonly name!: string;
}

@InputType()
export class GetCountryByIdInputType implements IGetCountryById {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  countryId!: string;
}
