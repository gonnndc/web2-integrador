import { Router } from 'express';
const router = Router();

import { getHome } from '../controllers/homeController.js';

router.get('/', getHome);

export default router;