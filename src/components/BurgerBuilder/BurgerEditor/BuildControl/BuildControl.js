import React from 'react';
import css from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <span className={css['BuildControl__label']}>{props.label}</span>
      <button
        onClick={props.removeIngredient}
        className={`${css['BuildControl__button']} ${css['BuildControl__button--less']}`}
        disabled={props.quantity < 1}>Less</button>
      <button onClick={props.addIngredient} className={`${css['BuildControl__button']} ${css['BuildControl__button--more']}`}>More</button>
    </div>
  );
};

export default BuildControl;
