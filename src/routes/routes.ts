import express from 'express';
import * as controller from '../controllers/productsController.js';

const router = express.Router();

router.get('/products/:id', controller.getOne);
router.get('/products', controller.getAll);

export default router;
