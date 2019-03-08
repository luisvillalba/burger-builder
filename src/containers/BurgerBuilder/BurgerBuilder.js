import React from 'react';
import css from './BurgerBuilder.module.css';
import BurgerRepresentation from '../../components/BurgerBuilder/BurgerRepresentation/BurgerRepresentation';

class BurgerBuilder extends React.Component {
  state = {
    'Ingredients': []
  };

  render() {
    return (
      <section className={css.BurgerBuilder}>
        <BurgerRepresentation></BurgerRepresentation>
      </section>
    );
  }
}

export default BurgerBuilder;