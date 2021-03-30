import React from 'react';

import Loader from '../Loader/Loader';

const WithLoader = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Loader /> : <WrappedComponent {...otherProps} />;
};

export default WithLoader;
