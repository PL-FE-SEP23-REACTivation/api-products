import Phone from '../../models/phone.js';

export const getAll = async () => {
  return await Phone.findAll();
};

export const getPhoneById = async (id: string) => {
  return await Phone.findByPk(id);
};

export const getQuantity = async () => {
  return await Phone.count();
};
