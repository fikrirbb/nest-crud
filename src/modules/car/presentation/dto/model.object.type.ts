import { ObjectType, Field, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { ModelEntity } from "../../domain/entities/model.entity";

@ObjectType()
export class ModelObjectType extends ModelEntity {
  @Field(() => ID)
  modelId!: string;

  @Field(() => String, { nullable: true })
  name!: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
