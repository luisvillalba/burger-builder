import React from 'react';
import css from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .filter((key) => props.ingredients[key] > 0)
    .reduce((ac, cur) => {
      return ac.concat([...Array(props.ingredients[cur])].map((el, i) => {
          return <BurgerIngredient type={cur} key={cur + i}/>
        }));
    }, []);

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="BreadTop" />
      {(ingredients.length) ? ingredients : 'Please add ingredients'}
      <BurgerIngredient type="BreadBottom" />
    </div>
  )
}

export default Burger;
