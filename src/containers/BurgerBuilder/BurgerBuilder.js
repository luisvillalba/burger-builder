import React from 'react';
import css from './BurgerBuilder.module.css';
import BurgerRepresentation from '../../components/BurgerBuilder/BurgerRepresentation/BurgerRepresentation';
import BurgerEditor from '../../components/BurgerBuilder/BurgerEditor/BurgerEditor';
import axios from 'axios';

const INGREDIENTS_URL = 'https://firestore.googleapis.com/v1beta1/projects/burger-builder-19b67/databases/(default)/documents/ingredients/';

class BurgerBuilder extends React.Component {
  state = {
    ingredientPrices: {
    },
    ingredients: {
    },
    totalPrice: 4,
    isBuying: false,
    isCheckingout: false
  };

  componentDidMount() {
    axios.get(INGREDIENTS_URL).then(response => {
      const ingredientPrices = response.data.documents.reduce((ac, doc) => {
        ac[doc.fields.name.stringValue] = doc.fields.price.doubleValue;
        return ac;
      }, {});
      const ingredients = response.data.documents.reduce((ac, doc) => {
        ac[doc.fields.name.stringValue] = 0;
        return ac;
      }, {});
      console.log({ingredients: ingredients, ingredientPrices: ingredientPrices});

      this.setState({ingredients: ingredients, ingredientPrices: ingredientPrices});
    });
  }

  removeIngredient(type) {
    if (this.state.ingredients[type] > 0) {
      let ingredients = {...this.state.ingredients};
      let price = this.state.totalPrice - this.state.ingredientPrices[type];

      ingredients[type] = ingredients[type] - 1;
      this.setState({totalPrice: price, ingredients: ingredients});
    }
  }

  addIngredient(type) {
    let ingredients = {...this.state.ingredients};
    let price = this.state.totalPrice + this.state.ingredientPrices[type];

    ingredients[type] = ingredients[type] + 1;
    this.setState({totalPrice: price, ingredients: ingredients});
  }

  setBuying(isBuying) {
    this.setState({isBuying: isBuying});
  }

  setCheckOut(isCheckingout) {
    this.setState({isCheckingout: isCheckingout});
  }

  cancelOrder() {
    const oldIngredients = {...this.state.ingredients};
    const newIngredients = Object.keys(oldIngredients).reduce((ac, cur) => {
      ac[cur] = 0;
      return ac;
    }, {})

    this.setState({
      ingredients: newIngredients,
      isBuying: false,
      isCheckingout: false,
      totalPrice: 4
    });
  }

  render() {
    return (
      <section className={css.BurgerBuilder}>
        <BurgerRepresentation
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}/>
        <BurgerEditor
          ingredients={this.state.ingredients}
          setBuying={this.setBuying.bind(this)}
          cancelOrder={this.cancelOrder.bind(this)}
          setCheckOut={this.setCheckOut.bind(this)}
          isBuying={this.state.isBuying}
          totalPrice={this.state.totalPrice}
          addIngredient={this.addIngredient.bind(this)}
          removeIngredient={this.removeIngredient.bind(this)}/>
      </section>
    );
  }
}

export default BurgerBuilder;