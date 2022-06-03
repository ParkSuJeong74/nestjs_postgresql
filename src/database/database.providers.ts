import { DataSource } from 'typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: dbConfig.type,
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: dbConfig.synchronize,
      });

      return dataSource.initialize();
    },
  },
];
