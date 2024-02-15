import fs from 'fs/promises';
import path from 'path';
import { PhoneType } from '../types/productType';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'phones.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  return read();
};

export const getPhoneById = async (id: string) => {
  const phones = await read();
  const result = phones.find((phone: PhoneType) => phone.id === id);

  return result;
};

// -------get from database-------
// import Phone from '../../models/phone';

// export const getAll = async () => {
//   return await Phone.findAll();
// };

// export const getAccessorie = async (id: string) => {
//   return await Phone.findByPk(id);
// };
