import React from 'react';
import css from './BurgerEditor.module.css';
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../../hoc/Aux/Aux';
import OrderSummary from './OrderSummary/OrderSummary';
import Checkout from './Checkout/Checkout';

const BurgerEditor = (props) => {
  const validOrder = Object.keys(props.ingredients)
      .filter((key) => props.ingredients[key] > 0).length > 0;
  const ingredients = Object.keys(props.ingredients);

  return (
    <Aux>
      <div className={css.BurgerEditor}>
        { ingredients.map((control, i) => (
          <BuildControl
            key={control + i}
            label={control}
            value={control}
            addIngredient={() => props.addIngredient(control)}
            removeIngredient={() => props.removeIngredient(control)}
            quantity={props.ingredients[control]}/>
        )) }
      </div>
      <button
        className={css.OrderCta}
        onClick={() => props.setBuying(true)}
        disabled={!validOrder}>
        Order
      </button>
      {props.isBuying ?
        <OrderSummary
          totalPrice={props.totalPrice}
          setBuying={props.setBuying}
          cancelOrder={props.cancelOrder}
          setCheckOut={props.setCheckOut}
          ingredients={props.ingredients}/> : null}
      {props.isCheckingout ?
        <Checkout
          placeOrder={props.placeOrder}/> : null}
    </Aux>
  )
}

export default BurgerEditor
