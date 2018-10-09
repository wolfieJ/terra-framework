
import React from 'react';
import SafeRoutingContext from './SafeRoutingContext';

const withSafeRouting = Component => (
  props => (
    <SafeRoutingContext.Consumer>
      {safeRouting => (
        <Component {...props} safeRouting={safeRouting} />
      )}
    </SafeRoutingContext.Consumer>
  )
);

export default withSafeRouting;
