import Tablet from '../../models/tablet.js';

//not using?
export const getAll = async (limit: number, startIndex: number) => {
  return await Tablet.findAll({
    limit,
    offset: startIndex,
  });
};

export const getTablet = async (id: string) => {
  return await Tablet.findByPk(id);
};
