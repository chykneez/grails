import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer
} from './CheckoutPageStyles';

import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import StripeButton from '../../Components/StripeButton/StripeButton';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cartSelectors';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer>
      <span>Total: ${total}</span>
    </TotalContainer>

    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
