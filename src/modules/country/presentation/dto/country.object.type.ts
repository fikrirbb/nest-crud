import { ObjectType, Field, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { CountryEntity } from "../../domain/entities/country.entity";

@ObjectType()
export class CountryObjectType extends CountryEntity {
  @Field(() => ID)
  countryId!: string;

  @Field(() => String, { nullable: true })
  name!: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
