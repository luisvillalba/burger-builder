import React from 'react';
import css from './BurgerBuilder.module.css';
import BurgerRepresentation from '../../components/BurgerBuilder/BurgerRepresentation/BurgerRepresentation';
import BurgerEditor from '../../components/BurgerBuilder/BurgerEditor/BurgerEditor';

const INGREDIENT_PRICES = {
  Letuce: 0.3,
  Cheese: 0.5,
  Meat: 1,
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      Letuce: 0,
      Cheese: 0,
      Meat: 0
    },
    totalPrice: 4
  };

  removeIngredient(type) {
    if (this.state.ingredients[type] > 0) {
      let ingredients = {...this.state.ingredients};
      let price = this.state.totalPrice - INGREDIENT_PRICES[type];

      ingredients[type] = ingredients[type] - 1;
      this.setState({totalPrice: price, ingredients: ingredients});
    }
  }

  addIngredient(type) {
    let ingredients = {...this.state.ingredients};
    let price = this.state.totalPrice + INGREDIENT_PRICES[type];

    ingredients[type] = ingredients[type] + 1;
    this.setState({totalPrice: price, ingredients: ingredients});
  }

  render() {
    return (
      <section className={css.BurgerBuilder}>
        <BurgerRepresentation
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}/>
        <BurgerEditor
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient.bind(this)}
          removeIngredient={this.removeIngredient.bind(this)}/>
      </section>
    );
  }
}

export default BurgerBuilder;