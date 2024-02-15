import Product from '../../models/product';

export const getAll = async () => {
  return await Product.findAll();
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

export const getProductById = async (id: string) => {
  const products = await getAll();
  const result = products.find((prod: Product) => prod.itemId === id);
  return result;
};
