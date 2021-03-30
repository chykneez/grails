import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './CartDropdownStyles';

import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
      )}
    </CartItemsContainer>

    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropdown());
      }}
    >
      CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
