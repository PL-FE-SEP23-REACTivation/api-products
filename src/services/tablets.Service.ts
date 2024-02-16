import Tablet from '../../models/tablet.js';

export const getAll = async () => {
  return await Tablet.findAll();
};

export const getTablet = async (id: string) => {
  return await Tablet.findByPk(id);
};
