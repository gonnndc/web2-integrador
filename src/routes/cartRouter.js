import { Router } from 'express';
const router = Router();

//import Product, { findById, update, remove } from '../models/productModel.js';
import { getAllCart } from '../controllers/cartController.js';

router.get('/', getAllCart);

export default router;