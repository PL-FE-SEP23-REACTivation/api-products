import Accessory from '../../models/accessory.js';

export const getAllWithPagination = async (
  limit: number,
  startIndex: number
) => {
  return await Accessory.findAll({
    limit,
    offset: startIndex,
  });
};

export const getAccessorie = async (id: string) => {
  return await Accessory.findByPk(id);
};
