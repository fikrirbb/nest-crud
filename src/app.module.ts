import { configuration } from "./config/configuration";
import { getORMConfig } from "./config/ormconfig";
import { GraphQLModule } from "@nestjs/graphql";
import { graphqlUploadExpress } from "graphql-upload";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommandModule } from "nestjs-command";

import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarModule } from "./modules/car/car.module";
import { CountryModule } from "./modules/country/country.module";

export const appModules = [CarModule, CountryModule];

export const coreModules = [
  ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
  GraphQLModule.forRoot({
    autoSchemaFile: true,
    playground: true,
    introspection: true,
    uploads: false, // disable built-in upload handling
  }),
  CommandModule,
];

const dbModule = TypeOrmModule.forRoot(getORMConfig());

@Module({
  imports: [...appModules, ...coreModules, dbModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes("graphql");
  }
}
