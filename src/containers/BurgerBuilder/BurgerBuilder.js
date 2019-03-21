import React from 'react';
import css from './BurgerBuilder.module.css';
import BurgerRepresentation from '../../components/BurgerBuilder/BurgerRepresentation/BurgerRepresentation';
import BurgerEditor from '../../components/BurgerBuilder/BurgerEditor/BurgerEditor';
import axios from 'axios';
import uniqid from 'uniqid';

const INGREDIENTS_ENDPOINT = 'https://burger-builder-19b67.firebaseio.com/ingredients.json';
const ORDERS_ENDPOINT = 'https://burger-builder-19b67.firebaseio.com/orders'

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
    axios.get(INGREDIENTS_ENDPOINT).then(response => {
      const ingredientPrices = Object.keys(response.data).reduce((ac, key) => {
        ac[response.data[key].name] = response.data[key].price;
        return ac;
      }, {});
      const ingredients = Object.keys(response.data).reduce((ac, key) => {
        ac[response.data[key].name] = 0;
        return ac;
      }, {});

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

  placeOrder() {
    const data = {
      "orderId": uniqid(),
      "userId": "luismvillalba@gmail.com",
      "ingredients": this.state.ingredients,
      "totalPrice": this.state.totalPrice,
      "orderDate": new Date().toUTCString()
    };

    axios.put(ORDERS_ENDPOINT + '/' + data.orderId + '.json', data).then(response => {
      alert('Order Placed');
      this.resetOrder();
    });
  }

  resetOrder() {
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
          cancelOrder={this.resetOrder.bind(this)}
          setCheckOut={this.setCheckOut.bind(this)}
          isBuying={this.state.isBuying}
          isCheckingout={this.state.isCheckingout}
          totalPrice={this.state.totalPrice}
          placeOrder={this.placeOrder.bind(this)}
          addIngredient={this.addIngredient.bind(this)}
          removeIngredient={this.removeIngredient.bind(this)}/>
      </section>
    );
  }
}

export default BurgerBuilder;