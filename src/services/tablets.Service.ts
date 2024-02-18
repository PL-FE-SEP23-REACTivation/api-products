import Tablet from '../../models/tablet.js';

export const getAll = async (limit: number, startIndex: number) => {
  return await Tablet.findAll({
    limit,
    offset: startIndex,
  });
};

export const getTablet = async (id: string) => {
  return await Tablet.findByPk(id);
};

export const getQuantity = async () => {
  return await Tablet.count();
};