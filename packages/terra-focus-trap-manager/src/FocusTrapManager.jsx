import React from 'react';
import PropTypes from 'prop-types';
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
   * The child components to render within the the context of the FocusTrapManager.
   */
  children: PropTypes.node,
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
    const { publicProviderValue, privateProviderValue } = this.state;

    return (
      <PrivateFocusTrapManagerContext.Provider value={privateProviderValue}>
        <PublicFocusTrapManagerContext.Provider value={publicProviderValue}>
          {children}
        </PublicFocusTrapManagerContext.Provider>
      </PrivateFocusTrapManagerContext.Provider>
    );
  }
}

FocusTrapManager.propTypes = propTypes;

/**
 * An implementation of the FocusTrapManager interfaced with the PrivateFocusTrapManagerContext is provided
 * as the default export to ensure nested manager communication is provided automatically.
 */
const FocusTrapManagerWithPrivateConsumer = props => (
  <PrivateFocusTrapManagerContext.Consumer>
    {parentFocusTrapManager => <FocusTrapManager {...props} parentFocusTrapManager={parentFocusTrapManager} />}
  </PrivateFocusTrapManagerContext.Consumer>
);

FocusTrapManagerWithPrivateConsumer.propTypes = propTypes;

export default FocusTrapManagerWithPrivateConsumer;
