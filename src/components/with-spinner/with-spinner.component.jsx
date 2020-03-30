import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles.jsx';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>  );
};

export default WithSpinner;