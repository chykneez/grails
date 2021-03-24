import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SigningPage from './Pages/SigningPage/SigningPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SigningPage} />
    </Switch>
  </div>
);

export default App;
