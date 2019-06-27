import React from 'react';
import DisclosureManagerContext from './DisclosureManagerContext';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const withDisclosureManager = (WrappedComponent) => {
  const WithDisclosureManagerComp = React.forwardRef((props, ref) => (
    <DisclosureManagerContext.Consumer>
      {disclosureManager => <WrappedComponent {...props} ref={ref} disclosureManager={disclosureManager} />}
    </DisclosureManagerContext.Consumer>
  ));

  WithDisclosureManagerComp.displayName = `withDisclosureManager(${getDisplayName(WrappedComponent)})`;
  WithDisclosureManagerComp.WrappedComponent = WrappedComponent;

  return WithDisclosureManagerComp;
};

export default withDisclosureManager;
