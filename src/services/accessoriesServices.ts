import fs from 'fs/promises';
import path from 'path';
import { PhoneType } from '../types/productType';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'accessories.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  return read();
};

export const getAccessorie = async (id: string) => {
  const accessorie = await read();
  const result = accessorie.find((tablet: PhoneType) => tablet.id === id);

  return result;
};
