import React from 'react';
import masterCard from '../../assets/all-images/master-card.jpg';
import paypal from '../../assets/all-images/paypal.jpg';
import '../../styles/payment-method.css';

const PaymentMethod = () => (
  <>
    <div className="payment">
      <label htmlFor="directBank" className="d-flex align-items-center gap-2">
        <input type="radio" id="directBank" name="paymentMethod" />
        {' '}
        Direct Bank Transfer
      </label>
    </div>

    <div className="payment mt-3">
      <label htmlFor="chequePayment" className="d-flex align-items-center gap-2">
        <input type="radio" id="chequePayment" name="paymentMethod" />
        {' '}
        Cheque Payment
      </label>
    </div>

    <div className="payment mt-3 d-flex align-items-center justify-content-between">
      <label htmlFor="masterCard" className="d-flex align-items-center gap-2">
        <input type="radio" id="masterCard" name="paymentMethod" />
        {' '}
        Master Card
      </label>

      <img src={masterCard} alt="" />
    </div>

    <div className="payment mt-3 d-flex align-items-center justify-content-between">
      <label htmlFor="paypal" className="d-flex align-items-center gap-2">
        <input type="radio" id="paypal" name="paymentMethod" />
        {' '}
        Paypal
      </label>

      <img src={paypal} alt="" />
    </div>

    <div className="payment text-end mt-5">
      <button type="button">Reserve Now</button>
    </div>
  </>
);

export default PaymentMethod;
