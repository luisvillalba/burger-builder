import React from 'react';
import css from './BurgerInformation.module.css';

const BurgerInformation = (props) => {
  const ingredients = Object.keys(props.ingredients)
      .filter((key) => props.ingredients[key] > 0);

  return (
    <div className={css.BurgerInformation}>
      <strong className={css['BurgerInformation__heading']}>Information:</strong>
      <table>
        <tbody>
          <tr>
            <td>Ingredients:</td><td>{ingredients.join(', ')}</td>
          </tr>
          <tr>
            <td>Total Price:</td><td>${props.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BurgerInformation;
