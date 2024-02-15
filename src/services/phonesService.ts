import Phone from '../../models/phone';

export const getAll = async () => {
  return await Phone.findAll();
};

export const getPhoneById = async (id: string) => {
  return await Phone.findByPk(id);
};