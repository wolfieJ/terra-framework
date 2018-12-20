import React from 'react';
import FocusTrapManagerContext from './FocusTrapManagerContext';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const WithFocusTrapManager = (WrappedComponent) => {
  const WithFocusTrapManagerComp = props => (
    <FocusTrapManagerContext.Consumer>
      {focusTrapManager => <WrappedComponent {...props} focusTrapManager={focusTrapManager} />}
    </FocusTrapManagerContext.Consumer>
  );

  WithFocusTrapManagerComp.displayName = `withFocusTrapManager(${getDisplayName(WrappedComponent)})`;
  WithFocusTrapManagerComp.WrappedComponent = WrappedComponent;

  return WithFocusTrapManagerComp;
};

export default WithFocusTrapManager;
