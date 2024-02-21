import { Request, Response } from 'express';
import * as service from '../services/productsService.js';

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

export const getAllByCategory = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.perPage as string) || 8;
  const sortBy = (req.query.sortBy as string) || 'newest';
  const search = (req.query.search as string) || '';
  const { category } = req.params;
  const startIndex = (page - 1) * limit;
  if (category === undefined) {
    res.sendStatus(404);
    return;
  }
  try {
    const products = await service.getProductsByCategory(
      category,
      limit,
      startIndex,
      sortBy,
      search
    );
    res.send(products);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getRecomended = async (req: Request, res: Response) => {
  try {
    const result = await service.getRecomendedProducts();

    res.send(result);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getHotPrice = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 12;

  try {
    const products = await service.getProductsWithHotPrice(limit);

    res.send(products);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getNewestProducts = async (req: Request, res: Response) => {
  try {
    const products = await service.getNewProducts();

    res.send(products);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getQuantityByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  const search = (req.query.search as string) || '';
  console.log(search);

  if (!category) {
    res.sendStatus(404);
  }

  try {
    const quantity = await service.getQuantity(category, search);
    const result = { quantity };

    res.send(result);
  } catch (e) {
    res.sendStatus(404);
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const { itemId } = req.params;

  if (itemId === undefined) {
    res.sendStatus(404);
    return;
  }
  try {
    const products = await service.getProbuctByItemId(itemId);
    res.send(products);
  } catch (e) {
    res.sendStatus(404);
  }
};
