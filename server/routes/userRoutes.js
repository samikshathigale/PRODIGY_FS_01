// routes/userRoutes.js
import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

const userRouter = express.Router();

// GET user data (userAuth middleware ensures user is authenticated)
userRouter.get('/data', userAuth, getUserData);

export default userRouter;
