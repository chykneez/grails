import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './HeaderStyles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { auth } from '../../firebase/utils';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHideen } from '../../redux/cart/cartSelectors';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>

      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHideen
});

export default connect(mapStateToProps)(Header);
