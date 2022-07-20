/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Dialect, Sequelize } from 'sequelize';
import config from '../../config/database';

const env = process.env.NODE_ENV || 'development';

const connection = new Sequelize(
  config[env].database!,
  config[env].username!,
  config[env].password!,
  {
    host: config[env].host,
    dialect: config[env].dialect as Dialect,
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
    },
  }
);

// CREATE DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
// connection.query(
//   'ALTER DATABASE dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;'
// );

export default connection;
