import { Router } from 'express';
import * as authController from '../controllers/authController.js';
const authRouter = Router();

authRouter.post('/register', authController.registerUser);

export default authRouter;
