import Product from '../../models/product';

export const getAll = async () => {
  return await Product.findAll();
};
