import { Request, Response } from 'express';
import * as service from '../services/accessoriesService.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.perPage as string) || 8;
  const startIndex = (page - 1) * limit;

  try {
    const products = await service.getAllWithPagination(limit, startIndex);

    res.send(products);
  } catch (e) {
    res.sendStatus(404);
  }
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

export const getAccessoriesQuantity = async (req: Request, res: Response) => {
  try {
    const quantity = await service.getQuantity();
    console.log(quantity);

    res.send(quantity);
  } catch (e) {
    res.sendStatus(404);
  }
};
