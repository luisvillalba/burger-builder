import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';

const ORDERS_ENDPOINT = 'https://burger-builder-19b67.firebaseio.com/orders/{orderId}.json';

export default class Orders extends Component {
  state = {order: {}}

  componentDidMount() {
    const { orderId } = this.props.match.params;
    axios.get(ORDERS_ENDPOINT.replace('{orderId}', orderId)).then((response) => {
      this.setState({order: response.data});
    });
  }

  render() {
    const order = this.state.order;
    let orderDetails = null;
    console.log(order);
    if (order.orderId) {
      orderDetails = (
        <Aux>
          <p>ID: {order.orderId}</p>
          <p>Date: {order.orderDate}</p>
          <p>Price: ${order.totalPrice.toFixed(2)}</p>
          <p>User: {order.userId}</p>
          <p>Ingredients: <ul>{Object.keys(order.ingredients).map(ing => <li>{ing} x {order.ingredients[ing]}</li>)}</ul></p>
        </Aux>);
    }
    return (
      <div>{orderDetails}</div>
    );
  };
};
