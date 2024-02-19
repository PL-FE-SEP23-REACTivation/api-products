import { Request, Response } from 'express';
import * as service from '../services/phonesService.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.perPage as string) || 8;

  try {
    const products = await service.getAll();
    const startIndex = (page - 1) * limit;
    const lastIndex = page * limit;
    const paginatedProducts = products.slice(startIndex, lastIndex);

    res.send(paginatedProducts);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getPhoneById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === undefined) {
    res.sendStatus(404);

    return;
  }

  try {
    const product = await service.getPhoneById(id);

    if (product === undefined) {
      res.sendStatus(404);

      return;
    }

    res.send(product);
  } catch (e) {
    res.sendStatus(404);
  }
};
