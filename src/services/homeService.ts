import Product from '../../models/product.js';
import sequelize from 'sequelize';

export const getProductsWithHotPrice = async () => {
  return await Product.findAll({
    attributes: ['id', 'category', 'itemId', 'name', 'fullPrice', 'price',
      'screen', 'capacity', 'color', 'ram', 'year', 'image']
    //   [sequelize.literal('(fullPrice - price)'), 'discount']],
    // order: [[sequelize.literal('(fullPrice - price)'), 'DESC']]
  });
};

export const getNewProducts = async () => {
  return await Product.findAll({
    where: {
      year: {
        [sequelize.Op.gte]: 2022
      }
    }
  });
};