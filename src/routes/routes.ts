import express from 'express';
import * as controller from '../controllers/productsController.js';
import * as phonesController from '../controllers/phonesController.js';
import * as tabletsController from '../controllers/tabletsController.js';
// eslint-disable-next-line max-len
import * as accessoriesController from '../controllers/accessoriesController.js';

const router = express.Router();

router.get('/products', controller.getAll);
router.get('/phones/:id', phonesController.getPhoneById);
router.get('/phones', phonesController.getAll);
router.get('/tablets/:id', tabletsController.getTabletById);
router.get('/tablets', tabletsController.getAll);
router.get('/accessories/:id', accessoriesController.getAccessorieById);
router.get('/accessories', accessoriesController.getAll);

export default router;
