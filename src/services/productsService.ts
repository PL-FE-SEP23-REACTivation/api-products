import Product from '../../models/product';
import fs from 'fs/promises';
import path from 'path';
import { ProductType } from '../types/productsType';

export const getAll = async () => {
  return await Product.findAll();

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
  const products = await getAll();
  const result = products.find((prod: Product) => prod.itemId === id);
  return result;
};
