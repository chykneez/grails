import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';

import { toggleCartDropdown } from '../../redux/cart/cartActions';

const CartIcon = ({ toggleCartDropdown }) => (
  <div className='cart-icon' onClick={toggleCartDropdown}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
