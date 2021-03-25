import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';

import { toggleCartDropdown } from '../../redux/cart/cartActions';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartDropdown}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
