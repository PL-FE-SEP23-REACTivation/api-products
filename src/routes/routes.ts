import express from 'express';
import * as controller from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';

const router = express.Router();

router.get('/products', controller.getAll);
router.get('/phones/:id', phonesController.getPhoneById);
router.get('/phones', phonesController.getAll);
router.get('/tablets/:id', );
router.get('/tablets', );
router.get('/accessories/:id', );
router.get('/accessories', );

export default router;
