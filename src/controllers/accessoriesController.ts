import { Request, Response } from 'express';
import * as service from '../services/accessoriesService.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;
  const startIndex = (page - 1) * limit;
  const products = await service.getAllWithPagination(limit, startIndex);

  res.send(products);
};

export const getAccessorieById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === undefined) {
    res.sendStatus(404);

    return;
  }

  try {
    const product = await service.getAccessorie(id);

    if (product === undefined) {
      res.sendStatus(404);

      return;
    }

    res.send(product);
  } catch (e) {
    res.sendStatus(404);
  }
};
