import React from 'react';
import css from './BurgerRepresentation.module.css';
import Burger from './Burger/Burger';
import BurgerInformation from './BurgerInformation/BurgerInformation';

const BurgerRepresentation = (props) => {
  return (
    <div className={css.BurgerRepresentation}>
      <Burger ingredients={props.ingredients} />
      <BurgerInformation
        ingredients={props.ingredients}
        price={props.price}/>
    </div>
  );
};

export default BurgerRepresentation;
