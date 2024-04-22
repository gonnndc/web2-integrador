import { Router } from 'express';
const router = Router();

//import Product, { findById, update, remove } from '../models/productModel.js';
import { savePurchase } from '../controllers/purchasesController.js';

router.post('/', savePurchase);


export default router;