import * as fs from 'node:fs/promises';
import path from 'node:path';
import HttpError from '../helpers/httpError.js';
import * as services from '../services/productsServices.js';

const posterPath = path.resolve('public', 'posters');

export const getProducts = async (req, res, next) => {
  try {
    const products = await services.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  const { path: oldPath, filename } = req.file;
  const newPath = path.join(posterPath, filename);
  await fs.rename(oldPath, newPath);
  const poster = path.join('public', 'posters', filename);
  try {
    const product = await services.addProduct(...req.body, poster);
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

const getProductImagesPath = (filename) =>
  path.resolve('public', 'products', filename);
export const updateProductImages = async (req, res, next) => {
  try {
    const promisesArray = req.files.map(async (file) => {
      const oldPath = file.path;
      const newPath = getProductImagesPath(file.filename);
      await fs.rename(oldPath, newPath);
      return path.join('products', file.filename);
    });
    const result = await Promise.allSettled(promisesArray);
    const data = result.map(({ value }) => value);
    console.log(data);
    const productImages = await services.updateById(req.params.id, {
      images: data,
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
};
