import { Request, Response } from 'express';
import * as service from '../services/productsService.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;

  const products = await service.getAll();
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;
  const paginatedProducts = products.slice(startIndex, lastIndex);

  res.send(paginatedProducts);
};


export const getRecomended = async (req: Request, res: Response) => {
  const result = await service.getRecomendedProducts();

  res.send(result);

export const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === undefined) {
    res.sendStatus(404);

    return;
  }

  try {
    const product = await service.getProductById(id);

    if (product === undefined || product.length === 0) {
      res.sendStatus(404);

      return;
    }

    res.send(product);
  } catch (e) {
    res.sendStatus(404);
  }
};
