import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../../firebase/utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>

      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
