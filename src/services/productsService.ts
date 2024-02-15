import fs from 'fs/promises';
import path from 'path';
import { ProductType } from '../types/productsType';
import Product from '../../models/product';

const read = async () => {
  const fileLocation = path.resolve('public/api', 'products.json');
  const data = await fs.readFile(fileLocation, 'utf-8');
  return JSON.parse(data);
};

export const getAll = async () => {
  //get from file
  return read();

  //get from database
  // return Product.findAll();
};

export const getRecomendedProducts = async () => {
  const allproducts = await getAll();
  const numb: number[] = await generateRandomNumbersArray(allproducts.length);
  const result: ProductType[] = [];

  await numb.forEach(async (el) => {
    result.push(allproducts.find((p: ProductType) => p.id === el));
  });

  return result;
};

const generateRandomNumbersArray = (max: number) => {
  const result: number[] = [];

  if (max <= 0) {
    return result;
  }

  while (result.length < 12) {
    const randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1;

    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber);
    }
  }

  return result;
};

export const getProductById = async (id: string) => {
  const products = await read();
  const result = products.find((prod: Product) => prod.itemId === id);
  return result;
};
