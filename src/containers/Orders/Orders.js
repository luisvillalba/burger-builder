import React, { Component } from 'react';
import axios from 'axios';

const ORDERS_ENDPOINT = 'https://burger-builder-19b67.firebaseio.com/orders.json';

export default class Orders extends Component {
  state = {orders: {}}

  componentDidMount() {
    axios.get(ORDERS_ENDPOINT).then((response) => {
      this.setState({orders: response.data});
    });
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.orders).map((orderId) => <p key={orderId}>{orderId}</p>)}
      </div>
    );
  };
};
