import fs from 'fs/promises';
import path from 'path';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'products.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  return read();
};
