import React from 'react';
import FocusTrapManagerContext from './FocusTrapManagerContext';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

/**
 * This function generates a new Component by wrapping the given Component class with a FocusTrapManagerContext.Consumer.
 * The wrapped component will be provided with the context value through a prop named focusTrapManager.
 *
 * @param {Component} WrappedComponent The Component class to be wrapped and provided with the focusTrapManager prop.
 */
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
