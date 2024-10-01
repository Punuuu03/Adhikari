/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/order', { amount });
      
      const options = {
        key: 'P1NcO9FFUnTVdK',
        amount: data.amount,
        currency: 'INR',
        name: 'Your Company',
        description: 'Test Transaction',
        order_id: data.id,
        handler: function (response) {
          alert(`Payment Successful: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'PRUTHVIRAJ PRATAPRAO PATANKAR',
          email: 'papatankar5@gmail.com',
          contact: '9422901806',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
