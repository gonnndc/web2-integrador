import { Router } from 'express';
const router = Router();

//import Product, { findById, update, remove } from '../models/productModel.js';
import { getAllProducts, getProductByCategory } from '../controllers/productsController.js';

router.get('/', getAllProducts);

router.get('/category/:category', getProductByCategory);

export default router;