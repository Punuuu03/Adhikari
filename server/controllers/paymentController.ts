import { Request, Response } from 'express';
import razorpayInstance from '../utils/razorpay'; // Razorpay instance from utility

export const createOrder = async (req: Request, res: Response) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // Amount in paisa (smallest unit of INR)
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};
