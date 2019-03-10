import React from 'react';
import css from './BurgerEditor.module.css';
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../../hoc/Aux/Aux';

const BUILD_CONTROLS = [
  {label: 'Letuce', value: 'Letuce'},
  {label: 'Cheese', value: 'Cheese'},
  {label: 'Meat', value: 'Meat'},
];

const BurgerEditor = (props) => {
  const validOrder = Object.keys(props.ingredients)
      .filter((key) => props.ingredients[key] > 0).length > 0;

  return (
    <Aux>
      <div className={css.BurgerEditor}>
        { BUILD_CONTROLS.map((control, i) => (
          <BuildControl
            key={control.label + i}
            label={control.label}
            value={control.value}
            addIngredient={() => props.addIngredient(control.value)}
            removeIngredient={() => props.removeIngredient(control.value)}
            quantity={props.ingredients[control.value]}/>
        )) }
      </div>
      <button
        className={css.OrderCta}
        disabled={!validOrder}>
        Order
      </button>
    </Aux>
  )
}

export default BurgerEditor
