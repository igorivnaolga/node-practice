import * as services from '../services/productsServices.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await services.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
