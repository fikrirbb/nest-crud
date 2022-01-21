import { AppModule } from './app.module';
import { validateEnvironmentVars } from './config/configuration';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  validateEnvironmentVars();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get('server.port');
  await app.listen(port);
  Logger.log(`Appplication started on port: ${port}`);
}
bootstrap();
