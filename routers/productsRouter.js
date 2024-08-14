import { Router } from 'express';
import * as controllers from '../controllers/productsController.js';
import { validateDiscount } from '../middlewares/validateProducts.js';
import upload from '../middlewares/upload.js';

const productsRouter = Router();
productsRouter.get('/', controllers.getProducts);
// upload.fields([{name: "poster", maxCount: 1 }, {name: "subposter", maxCount: 4}])
// upload.array("poster", 8)
productsRouter.post(
  '/',
  upload.single('poster'),
  validateDiscount,
  controllers.addProduct
);
productsRouter.delete('/:id', controllers.deleteProduct);
productsRouter.patch('/:id', controllers.updateProduct);
productsRouter.patch(
  '/:id/discount',
  validateDiscount,
  controllers.updateProductDiscount
);

export default productsRouter;
