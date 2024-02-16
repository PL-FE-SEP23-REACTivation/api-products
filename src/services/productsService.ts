import Product from '../../models/product.js';

export const getAll = async () => {
  return await Product.findAll();
};

export const getAllWithPagination = async (
  limit: number,
  startIndex: number
) => {
  return await Product.findAll({
    limit,
    offset: startIndex,
  });
};

export const getProductsByCategory = async (
  category: string,
  limit: number,
  startIndex: number
) => {
  return await Product.findAll({
    limit,
    offset: startIndex,
    where: { category },
  });
};

export const getRecomendedProducts = async () => {
  const allproducts = await getAll();
  const numb: number[] = await generateRandomNumbersArray(allproducts.length);
  const result: Product[] = [];

  for (const el of numb) {
    const foundProduct = allproducts.find((p) => p.id === el);
    if (foundProduct) {
      result.push(foundProduct);
    }
  }

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
