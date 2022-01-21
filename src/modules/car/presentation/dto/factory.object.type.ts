import { ObjectType, Field, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { FactoryEntity } from "../../domain/entities/factory.entity";

@ObjectType()
export class FactoryObjectType extends FactoryEntity {
  @Field(() => ID)
  factoryId!: string;

  @Field(() => String, { nullable: true })
  name!: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
