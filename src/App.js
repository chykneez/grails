import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/HomePage/HomePage';

const jordan = () => (
  <div>
    <h1>Air Jordan</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={jordan} />
    </Switch>
  </div>
);

export default App;
