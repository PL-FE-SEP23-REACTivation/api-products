import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// eslint-disable-next-line max-len
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.frankfurt-postgres.render.com/${DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
