/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DEV_DB_USER,
  DEV_DB_PASSWORD,
  DEV_DB_NAME,
  DEV_DB_HOST,
} = process.env;

const settings: SequelizeOptions =
  process.env.NODE_ENV === 'production'
    ? {
        database: DB_NAME,
        username: DB_USER,
        password: DB_PASSWORD,
        host: DB_HOST,
      }
    : {
        database: DEV_DB_NAME,
        username: DEV_DB_USER,
        password: DEV_DB_PASSWORD,
        host: DEV_DB_HOST,
      };

export const sequelize = new Sequelize(
  settings.database!,
  settings.username!,
  settings.password!,
  {
    host: settings.host!,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production',
    },
  }
);

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
