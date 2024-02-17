import dotenv from 'dotenv';
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

export default {
  development: {
    database: DEV_DB_NAME,
    username: DEV_DB_USER,
    password: DEV_DB_PASSWORD,
    host: DEV_DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
