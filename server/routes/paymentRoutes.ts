import { Router } from 'express';
import { createOrder } from '../controllers/paymentController';

const router = Router();

router.post('/order', createOrder);

export default router;
