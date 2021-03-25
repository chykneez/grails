import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SigningPage from './Pages/SigningPage/SigningPage';

import { auth, createUserDocument } from './firebase/utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigningPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
