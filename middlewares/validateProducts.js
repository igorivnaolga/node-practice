import Joi from 'joi';
import HttpError from '../helpers/httpError.js';

const validateDiscountSchema = Joi.object({
  discount: Joi.number().integer().max(100).min(0).required(),
});

export const validateDiscount = (req, res, next) => {
  try {
    const { error } = validateDiscountSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};
