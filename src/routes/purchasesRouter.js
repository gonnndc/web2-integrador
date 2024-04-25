import { Router } from 'express';
const router = Router();

import { savePurchase, historialPurchases } from '../controllers/purchasesController.js';

router.post('/', savePurchase);
router.get('/history', historialPurchases)


export default router;