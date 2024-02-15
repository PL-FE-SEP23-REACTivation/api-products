import Tablet from '../../models/tablet';

export const getAll = async () => {
  return await Tablet.findAll();
};
