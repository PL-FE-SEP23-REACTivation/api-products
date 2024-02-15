import Phone from '../../models/phone';

export const getAll = async () => {
  return await Phone.findAll();
};
