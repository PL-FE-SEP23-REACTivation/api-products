import { Request, Response } from 'express';
import * as service from '../services/homeService.js';

export const getHotPrice = async (req: Request, res: Response) => {
  try {
    const products = await service.getProductsWithHotPrice();

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