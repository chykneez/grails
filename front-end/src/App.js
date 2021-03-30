import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './AppStyles';

import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./Pages/ShopPage/ShopPage'));
const CheckoutPage = lazy(() => import('./Pages/CheckoutPage/CheckoutPage'));
const SigningPage = lazy(() => import('./Pages/SigningPage/SigningPage'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SigningPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
