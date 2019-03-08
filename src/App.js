import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <h1>Burger builder</h1>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
