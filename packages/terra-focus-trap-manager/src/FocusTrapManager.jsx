import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

import PublicFocusTrapManagerContext from './FocusTrapManagerContext';

/**
 * A separate context instance is created to provide FocusTapManager pause/resume APIs.
 * This private context is defined locally and is not exported, limiting its usage to the
 * FocusTrapManager exclusively. This will allow nested FocusTrapManager's to communicate
 * appropriately without exposing the APIs unnecessarily to other components.
 */
const PrivateFocusTrapManagerContext = React.createContext();

const propTypes = {
  /**
   * Configuration options for the FocusTrap created by the FocusTrapManager.
   * Review react-focus-trap documentation for information: https://github.com/davidtheclark/focus-trap#focustrap--createfocustrapelement-createoptions
   * Note: The `escapeDeactivates` and `clickOutsideDeactivates` options are explicitly disabled by the FocusTrapManager. Any provided values
   * for those options will be discarded.
   */
  createOptions: PropTypes.shape({
    onActivate: PropTypes.func,
    onDeactivate: PropTypes.func,
    initialFocus: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    fallbackFocus: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    returnFocusOnDeactivate: PropTypes.bool,
  }),
  /**
   * The child component to render within the the context of the FocusTrapManager. The FocusTrap expects a single child element.
   */
  children: PropTypes.element,
  /**
   * [Private] APIs provided by a FocusTrapManager ancestor.
   */
  parentFocusTrapManager: PropTypes.shape({
    pause: PropTypes.func,
    resume: PropTypes.func,
  }),
};

class FocusTrapManager extends React.Component {
  constructor(props) {
    super(props);

    this.pauseFocusTrap = this.pauseFocusTrap.bind(this);
    this.resumeFocusTrap = this.resumeFocusTrap.bind(this);

    this.state = {
      /**
       * The escapeDeactivates and clickOutsideDeactivates options are explicitly disabled to prevent
       * activation issues with nested FocusTraps.
       *
       * The react-focus-trap does not check for differences in the createOptions prop post-mount,
       * so we can create this once without a corresponding componentDidUpdate implementation to update it.
       */
      focusTrapOptions: Object.assign({}, props.createOptions, {
        escapeDeactivates: false,
        clickOutsideDeactivates: false,
      }),
      /**
       * The publicProviderValue holds the data relevant to implementers of a FocusTrap, namely
       * whether or not the FocusTrap should be paused.
       */
      publicProviderValue: {
        isPaused: false,
      },
      /**
       * The privateProviderValue holds the APIs that allow child FocusTrapManagers to manipulate
       * the parent FocusTrapManager's state.
       */
      privateProviderValue: {
        pause: this.pauseFocusTrap,
        resume: this.resumeFocusTrap,
      },
    };
  }

  componentDidMount() {
    const { parentFocusTrapManager } = this.props;

    /**
     * If a parent FocusTrapManager exists, the ancestor is paused when this instance mounts.
     */
    if (parentFocusTrapManager) {
      parentFocusTrapManager.pause();
    }
  }

  componentWillUnmount() {
    const { parentFocusTrapManager } = this.props;

    /**
     * If a parent FocusTrapManager exists, the ancestor resumes when this instance unmounts.
     */
    if (parentFocusTrapManager) {
      parentFocusTrapManager.resume();
    }
  }

  pauseFocusTrap() {
    this.setState({
      publicProviderValue: { isPaused: true },
    });
  }

  resumeFocusTrap() {
    this.setState({
      publicProviderValue: { isPaused: false },
    });
  }

  render() {
    const { children } = this.props;
    const { publicProviderValue, privateProviderValue, focusTrapOptions } = this.state;

    return (
      <PrivateFocusTrapManagerContext.Provider value={privateProviderValue}>
        <PublicFocusTrapManagerContext.Provider value={publicProviderValue}>
          <FocusTrap
            active
            paused={publicProviderValue.isPaused}
            focusTrapOptions={focusTrapOptions}
          >
            {children}
          </FocusTrap>
        </PublicFocusTrapManagerContext.Provider>
      </PrivateFocusTrapManagerContext.Provider>
    );
  }
}

FocusTrapManager.propTypes = propTypes;

/**
 * An implementation of the FocusTrapManager interfaced with the PrivateFocusTrapManagerContext is exported
 * by default to ensure nested manager communication is provided automatically.
 */
const FocusTrapManagerWithPrivateConsumer = props => (
  <PrivateFocusTrapManagerContext.Consumer>
    {parentFocusTrapManager => <FocusTrapManager {...props} parentFocusTrapManager={parentFocusTrapManager} />}
  </PrivateFocusTrapManagerContext.Consumer>
);

FocusTrapManagerWithPrivateConsumer.propTypes = propTypes;

const focusTrapManagerShape = PropTypes.shape({
  isPaused: PropTypes.bool,
});

export default FocusTrapManagerWithPrivateConsumer;
export {
  focusTrapManagerShape,
};
