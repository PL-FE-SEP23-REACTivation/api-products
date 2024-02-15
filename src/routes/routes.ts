import express from 'express';
import * as productController from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';

const router = express.Router();

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getOne);
router.get('/products/:id/recommended', productController.getRecomended);
router.get('/phones', phonesController.getAll);

export default router;
