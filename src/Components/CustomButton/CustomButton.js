import React from 'react';

import './CustomButton.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google' : ''} ${
      inverted ? 'inverted' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
