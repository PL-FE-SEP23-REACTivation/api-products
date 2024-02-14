import fs from 'fs/promises';
import path from 'path';
import { PhoneType } from '../types/productType';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'tablets.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  return read();
};

export const getTablet = async (id: string) => {
  const tablets = await read();
  const result = tablets.find((tablet: PhoneType) => tablet.id === id);

  return result;
};
