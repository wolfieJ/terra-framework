import React from 'react';
import LayerManagerContext from './LayerManagerContext';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

/**
 * This function generates a new Component by wrapping the given Component class with a LayerManagerContext.Consumer.
 * The wrapped component will be provided with the context value through a prop named layerManager.
 *
 * @param {Component} WrappedComponent The Component class to be wrapped and provided with the layerManager prop.
 */
const withLayerManager = (WrappedComponent) => {
  const WithLayerManagerComp = props => (
    <LayerManagerContext.Consumer>
      {layerManager => <WrappedComponent {...props} layerManager={layerManager} />}
    </LayerManagerContext.Consumer>
  );

  WithLayerManagerComp.displayName = `withLayerManager(${getDisplayName(WrappedComponent)})`;
  WithLayerManagerComp.WrappedComponent = WrappedComponent;

  return WithLayerManagerComp;
};

export default withLayerManager;
