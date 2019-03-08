import React from 'react';
import css from './BurgerRepresentation.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerInformation from './BurgerInformation/BurgerInformation';

const BurgerRepresentation = (props) => {
  return (
    <div className={css.BurgerRepresentation}>
      <div className={css.Burger}>
        <BurgerIngredient type="BreadTop" />
        <BurgerIngredient type="BreadBottom" />
      </div>
      <BurgerInformation></BurgerInformation>
    </div>
  );
};

export default BurgerRepresentation;
