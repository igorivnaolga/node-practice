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
      throw HttpError(404, 'Not found');
    }

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await services.updateById(req.params.id, req.body);

    if (!product) {
      throw HttpError(404, 'Not found');
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProductDiscount = async (req, res, next) => {
  try {
    const product = await services.updateProductDiscount(
      req.params.id,
      req.body.discount
    );

    if (!product) {
      throw HttpError(404, 'Not found');
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
