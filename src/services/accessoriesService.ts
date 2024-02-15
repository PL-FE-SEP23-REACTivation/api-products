import Accessory from '../../models/accessory';

export const getAll = async () => {
  return await Accessory.findAll();
};

export const getAccessorie = async (id: string) => {
  return await Accessory.findByPk(id);
};
