import React from 'react';

const SafeRoutingContext = React.createContext({
  block: undefined,
  push: undefined,
});

export default SafeRoutingContext;
