import { Router } from 'express';
import * as controllers from '../controllers/productsController.js';

const productsRouter = Router();
productsRouter.get('/', controllers.getProducts);
productsRouter.post('/', controllers.addProduct);

export default productsRouter;
