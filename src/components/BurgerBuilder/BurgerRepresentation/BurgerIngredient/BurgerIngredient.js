import React from 'react';
import css from './BurgerIngredient.module.css';

const BurgerIngredient = (props) => {
  let classes = [];

  classes.push(css.BurgerIngredient);
  classes.push(css[`BurgerIngredient--${props.type}`]);

  return (
    <div className={classes.join(' ')}>
    </div>
  );
};

export default BurgerIngredient;
