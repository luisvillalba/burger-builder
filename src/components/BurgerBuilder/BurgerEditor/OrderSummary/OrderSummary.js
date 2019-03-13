import React from 'react';
import css from './OrderSummary.module.css';

const OrderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
      .filter((key) => props.ingredients[key] > 0);

  return (
    <section className={css.OrderSummary}>
      <p>A burger that contains: {ingredients.join(', ')}</p>
      <p>Total: {props.totalPrice}</p>
      <div>
        <button onClick={() => props.setCheckOut(true)}>Continue</button>
        <button onClick={() => props.setBuying(false)}>Edit</button>
        <button onClick={props.cancelOrder}>Cancel</button>
      </div>
    </section>
  );
};

export default OrderSummary;
