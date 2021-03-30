import React from 'react';

import { LoaderOverlay, LoaderContainer } from './WithLoaderStyles';

const WithLoader = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <LoaderOverlay>
      <LoaderContainer />
    </LoaderOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithLoader;
