import express from 'express';
import * as productController from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';

const router = express.Router();

router.get('/products', productController.getAll);
router.get('/phones', phonesController.getAll);

export default router;
