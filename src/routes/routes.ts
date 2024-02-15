/* eslint-disable max-len */
import express from 'express';
import * as productController from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';
import * as tabletsController from '../controllers/tabletsController.js';
import * as accessoriesController from '../controllers/accessoriesController.js';

const router = express.Router();

router.get('/products', productController.getAll);
router.get('/phones', phonesController.getAll);
router.get('/tablets', tabletsController.getAll);
router.get('/accessories', accessoriesController.getAll);

export default router;
