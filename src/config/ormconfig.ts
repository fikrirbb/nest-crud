import { configuration } from './configuration';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const getORMConfig = (): MysqlConnectionOptions => {
  const { dbHost, username, password, dbName } = configuration().databaseConfig;

  const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: dbHost,
    port: 3306,
    username,
    password,
    database: dbName,
    entities: [`${__dirname}../../**/**/*.model.{js,ts}`],
    synchronize: true,
  };
  return config;
};
