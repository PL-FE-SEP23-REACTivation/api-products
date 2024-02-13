import fs from 'fs/promises';
import path from 'path';
import Product from '../../models/product';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'products.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  return read();
};

export const getProductById = async (id: string) => {
  const products = await read();
  const result = products.find((prod: Product) => prod.itemId === id);
  return result;
};
