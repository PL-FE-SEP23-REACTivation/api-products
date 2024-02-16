import { Request, Response } from 'express';
import * as service from '../services/productsService.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;

  const products = await service.getAll();
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  if (products === undefined) {
    res.sendStatus(404);

    return;
  }

  const paginatedProducts = products.slice(startIndex, lastIndex);

  res.send(paginatedProducts);
};

export const getAllByCategory = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;
  const { category } = req.params;
  const startIndex = (page - 1) * limit;
  const products = await
  service.getProductsByCategory(category, limit, startIndex);

  if (category === undefined) {
    res.sendStatus(404);

    return;
  }

  if (products === undefined) {
    res.sendStatus(404);

    return;
  }

  res.send(products);
};

export const getRecomended = async (req: Request, res: Response) => {
  const result = await service.getRecomendedProducts();

  res.send(result);
};
