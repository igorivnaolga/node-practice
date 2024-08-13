import { response } from 'express';
import * as authServices from '../services/authService.js';

export const registerUser = async (req, res, next) => {
  try {
    const newUser = await authServices.registerUser(req.body);
    res.status(201).json({ email: newUser.email });
  } catch (error) {
    next(error);
  }
};
