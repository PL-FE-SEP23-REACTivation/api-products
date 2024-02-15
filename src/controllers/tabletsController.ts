import { Request, Response } from 'express';
import * as service from '../services/tablets.Service.js';

export const getAll = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 8;

  const products = await service.getAll();
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;
  const paginatedProducts = products.slice(startIndex, lastIndex);

  res.send(paginatedProducts);
};
