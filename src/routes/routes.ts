/* eslint-disable max-len */
import express from 'express';
import * as productController from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';
import * as tabletsController from '../controllers/tabletsController.js';
import * as accessoriesController from '../controllers/accessoriesController.js';
import * as homeController from '../controllers/homeController.js';

const router = express.Router();

router.get('/home/hotprice', homeController.getHotPrice);
router.get('/home/newproducts', homeController.getNewestProducts);

router.get('/products/:category', productController.getAllByCategory);
router.get('/products/:id/recommended', productController.getRecomended);
router.get('/products', productController.getAll);

router.get('/phones/:id', phonesController.getPhoneById);
router.get('/phones', phonesController.getAll);

router.get('/tablets/:id', tabletsController.getTabletById);
router.get('/tablets', tabletsController.getAll);

router.get('/accessories/:id', accessoriesController.getAccessorieById);
router.get('/accessories', accessoriesController.getAll);

export default router;
