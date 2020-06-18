import React, { Fragment } from 'react';
import Configuration from './components/configuration/Configuration';
import Orders from './components/orders/Orders';
import './App.css';

const App = () => (
  <Fragment>
    <Configuration />
    <Orders />
  </Fragment>
);

export default App;
