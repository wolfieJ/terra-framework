import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import PublicLayerManagerContext from './LayerManagerContext';

/**
 * A separate context instance is created to provide LayerManager's activate/deactivate APIs.
 * This private context is defined locally and is not exported, limiting its usage to the
 * LayerManager exclusively. This will allow nested LayerManager's to communicate
 * appropriately without exposing the APIs unnecessarily to other components.
 */
const PrivateLayerManagerContext = React.createContext();

const propTypes = {
  /**
   * The child components to render in the layer.
   */
  children: PropTypes.element,
  /**
   * [Private] APIs provided by a LayerManager ancestor.
   */
  parentLayerManager: PropTypes.shape({
    layerIndex: PropTypes.number,
    activate: PropTypes.func,
    deactivate: PropTypes.func,
  }),
};

class LayerManager extends React.Component {
  constructor(props) {
    super(props);

    this.activateLayer = this.activateLayer.bind(this);
    this.deactivateLayer = this.deactivateLayer.bind(this);

    let newLayerIndex = props.parentLayerManager ? props.parentLayerManager.layerIndex + 1 : 1;

    this.layerManagerRootElement = document.createElement('div');
    this.layerManagerRootElement.classList.add('layer-manager-container');
    this.layerManagerRootElement.style.zIndex = `${newLayerIndex}`;

    document.body.appendChild(this.layerManagerRootElement);

    this.state = {
      /**
       * The publicProviderValue holds the data relevant to implementers of the layer, namely
       * whether or not the layer is the current active, top-most layer.
       */
      publicProviderValue: {
        isActive: true,
      },
      /**
       * The privateProviderValue holds the APIs that allow child LayerManagers to manipulate
       * the parent LayerManager's state.
       */
      privateProviderValue: {
        layerIndex: newLayerIndex,
        activate: this.activateLayer,
        deactivate: this.deactivateLayer,
      },
    };
  }

  componentDidMount() {
    const { parentLayerManager } = this.props;

    /**
     * If a parent LayerManager exists, the ancestor is deactivated when this instance mounts.
     */
    if (parentLayerManager) {
      parentLayerManager.deactivate();
    }
  }

  componentWillUnmount() {
    const { parentLayerManager } = this.props;

    /**
     * If a parent LayerManager exists, the ancestor is re-activated when this instance unmounts.
     */
    if (parentLayerManager) {
      parentLayerManager.activate();
    } 

    document.body.removeChild(this.layerManagerRootElement);
  }

  activateLayer() {
    this.setState({
      publicProviderValue: { isActive: true },
    });
  }

  deactivateLayer() {
    this.setState({
      publicProviderValue: { isActive: false },
    });
  }

  render() {
    const { children } = this.props;
    const { publicProviderValue, privateProviderValue } = this.state;

    return createPortal((
      <PrivateLayerManagerContext.Provider value={privateProviderValue}>
        <PublicLayerManagerContext.Provider value={publicProviderValue}>
          {children}
        </PublicLayerManagerContext.Provider>
      </PrivateLayerManagerContext.Provider>
    ), this.layerManagerRootElement);
  }
}

LayerManager.propTypes = propTypes;

/**
 * An implementation of the LayerManager interfaced with the PrivateLayerManagerContext is exported
 * by default to ensure nested manager communication is provided automatically.
 */
const LayerManagerWithPrivateConsumer = props => (
  <PrivateLayerManagerContext.Consumer>
    {parentLayerManager => <LayerManager {...props} parentLayerManager={parentLayerManager} />}
  </PrivateLayerManagerContext.Consumer>
);

LayerManagerWithPrivateConsumer.propTypes = propTypes;

const LayerManagerShape = PropTypes.shape({
  isActive: PropTypes.bool,
});

export default LayerManagerWithPrivateConsumer;
export {
  LayerManagerShape,
};
