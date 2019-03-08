import React from 'react';
import css from './BurgerRepresentation.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerInformation from './BurgerInformation/BurgerInformation';

const BurgerRepresentation = (props) => {
  const ingredients = Object.keys(props.ingredients)
      .filter((key) => props.ingredients[key] > 0)
      .reduce((ac, cur) => {
        return ac.concat([...Array(props.ingredients[cur])].fill(<BurgerIngredient type={cur} />));
      }, []);

  return (
    <div className={css.BurgerRepresentation}>
      <div className={css.Burger}>
        <BurgerIngredient type="BreadTop" />
        {(ingredients.length) ? ingredients : 'Please add ingredients'}
        <BurgerIngredient type="BreadBottom" />
      </div>
      <BurgerInformation ingredients={props.ingredients} price={props.price}/>
    </div>
  );
};

export default BurgerRepresentation;
