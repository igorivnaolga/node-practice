import HttpError from '../helpers/httpError.js';
import * as services from '../services/productsServices.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await services.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const product = await services.addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await services.deleteProductById(req.params.id);
    if (!product) {
      throw HttpError(400, 'Not found');
    }

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
