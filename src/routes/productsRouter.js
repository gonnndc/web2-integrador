import { Router } from 'express';
const router = Router();

//import Product, { findById, update, remove } from '../models/productModel.js';
import { getAllProducts, getProduct, getProductByCategory } from '../controllers/productsController.js';

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.get('/category/:category', getProductByCategory);

export default router;