import Accessory from '../../models/accessory';

export const getAll = async () => {
  return await Accessory.findAll();
};
