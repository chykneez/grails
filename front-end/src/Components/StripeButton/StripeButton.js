import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const pk =
    'pk_test_51IVfswC6OTDKkj2VrJte4f5x2VY0ttS31RAtyAKG6JXITGMW8g3cVKYrj8WMDNdjZcybgVIsqdugK9jNtQVLeJPp002JPXudWF';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token
      }
    })
      .then(response => alert('Your payment was successful!'))
      .catch(error => {
        console.error('Payment error:', JSON.parse(error));
        alert('There was a problem with your payment. Please try again!');
      });
  };

  return (
    <StripeCheckout
      name='Grails'
      description={`Your total is: $${price}`}
      label='Pay Now'
      shippingAddress
      billingAddress
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pk}
    />
  );
};

export default StripeButton;
