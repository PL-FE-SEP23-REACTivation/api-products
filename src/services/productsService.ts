import Product from '../../models/product.js';
import sequelize, { Op, OrderItem } from 'sequelize';

export const getAll = async () => {
  return await Product.findAll();
};

//not using?
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
  startIndex: number,
  sortBy: string,
  search: string
) => {
  let order: OrderItem = ['year', 'DESC'];
  switch (sortBy) {
  case 'oldest':
    order = ['year', 'ASC'];
    break;
  case 'highest-price':
    order = ['price', 'DESC'];
    break;
  case 'lowest-price':
    order = ['price', 'ASC'];
    break;
  default:
    break;
  }
  return await Product.findAll({
    limit,
    offset: startIndex,
    where: {
      category,
      name: { [Op.iLike]: `%${search}%` },
    },
    order: [order, ['id', 'ASC']],
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

export const getProductsWithHotPrice = async (limit: number) => {
  return await Product.findAll({
    attributes: [
      'id',
      'category',
      'itemId',
      'name',
      'fullPrice',
      'price',
      'screen',
      'capacity',
      'color',
      'ram',
      'year',
      'image',
      [sequelize.literal('("fullPrice" - price)'), 'discount'],
    ],
    order: [['discount', 'DESC'], 'id'],
    limit,
  });
};

export const getNewProducts = async () => {
  return await Product.findAll({
    where: {
      year: {
        [sequelize.Op.gte]: 2022,
      },
    },
    order: [['year', 'DESC'], 'id'],
    limit: 12,
  });
};

export const getQuantity = async (category: string, search: string) => {
  return await Product.count({
    where: {
      category,
      name: { [Op.iLike]: `%${search}%` },
    },
  });
};

//test
export const getAllQuantity = async () => {
  return await Product.count({
    group: ['category'],
  });
};