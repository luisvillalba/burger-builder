import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        {Object.keys(this.state.orders).map((orderId) => {
          return (
            <p key={orderId}><Link to={"/orders/" + orderId}>{orderId}</Link></p>
          );})}
      </div>
    );
  };
};
