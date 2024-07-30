import { Router } from 'express';
import * as controllers from '../controllers/productsController.js';
import { validateDiscount } from '../middlewares/validateProducts.js';

const productsRouter = Router();
productsRouter.get('/', controllers.getProducts);
productsRouter.post('/', controllers.addProduct);
productsRouter.delete('/:id', controllers.deleteProduct);
productsRouter.patch('/:id', controllers.updateProduct);
productsRouter.patch(
  '/:id/discount',
  validateDiscount,
  controllers.updateProductDiscount
);

export default productsRouter;
