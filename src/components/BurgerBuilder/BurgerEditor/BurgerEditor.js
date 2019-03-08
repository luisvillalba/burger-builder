import React from 'react';
import css from './BurgerEditor.module.css';
import BuildControl from './BuildControl/BuildControl';

const BUILD_CONTROLS = [
  {label: 'Letuce', value: 'Letuce'},
  {label: 'Cheese', value: 'Cheese'},
  {label: 'Meat', value: 'Meat'},
];

const BurgerEditor = (props) => {
  return (
    <div className={css.BurgerEditor}>
      { BUILD_CONTROLS.map((control) => (
        <BuildControl
          label={control.label}
          value={control.value}
          addIngredient={() => props.addIngredient(control.value)}
          removeIngredient={() => props.removeIngredient(control.value)} />
      )) }
    </div>
  )
}

export default BurgerEditor
