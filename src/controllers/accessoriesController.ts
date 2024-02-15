import { Request, Response } from 'express';
import * as accessorieService from '../services/accessoriesServices';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;

  const products = await accessorieService.getAll();
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;
  const paginatedProducts = products.slice(startIndex, lastIndex);

  res.send(paginatedProducts);
};

export const getAccessorieById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === undefined) {
    res.sendStatus(404);

    return;
  }

  try {
    const product = await accessorieService.getAccessorie(id);

    if (product === undefined || product.length === 0) {
      res.sendStatus(404);

      return;
    }

    res.send(product);
  } catch (e) {
    res.sendStatus(404);
  }
};
