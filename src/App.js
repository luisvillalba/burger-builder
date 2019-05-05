import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import OrderDetails from './containers/OrderDetails/OrderDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/about/' exact component={About} />
          <Route path='/orders/' exact component={Orders} />
          <Route path='/orders/:orderId' component={OrderDetails} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
