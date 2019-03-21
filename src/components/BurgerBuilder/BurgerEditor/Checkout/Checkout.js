import React from 'react';
import css from './Checkout.module.css';

const Checkout = (props) => {
  return (
    <section className={css.Checkout}>
      <button onClick={props.placeOrder}>Confirm order</button>
    </section>
  );
};

export default Checkout;
