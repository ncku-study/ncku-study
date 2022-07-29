import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';

import config from '~/config/database';
import Category from './Category';
import Statistic from './Statistic';
import Study from './Study';
import StudyCategory from './StudyCategory';
import StudyStatistic from './StudyStatistic';
import User from './User';

const env = process.env.NODE_ENV || 'development';

const connection = new Sequelize({
    database: config[env].database,
    dialect: config[env].dialect as Dialect,
    username: config[env].username,
    password: config[env].password,
    host: config[env].host,
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    },
});

connection.addModels([
    User,
    Study,
    Category,
    Statistic,
    StudyCategory,
    StudyStatistic,
]);

// CREATE DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
// connection.query(
//   'ALTER DATABASE dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;'
// );

export default connection;
