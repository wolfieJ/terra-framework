import React from 'react';
import PropTypes from 'prop-types';

import FocusTrapManagerContext from './FocusTrapManagerContext';
import withFocusTrapManager from './withFocusTrapManager';

const propTypes = {
  focusTrapManager: PropTypes.object,
  children: PropTypes.node,
};

class FocusTrapManagerProvider extends React.Component {
  constructor(props) {
    super(props);

    this.setFocus = this.setFocus.bind(this);
    this.unsetFocus = this.unsetFocus.bind(this);

    this.state = {
      providerValue: {
        isFocused: true,
        requestFocus: this.unsetFocus,
        releaseFocus: this.setFocus,
      },
    };
  }

  componentDidMount() {
    const { focusTrapManager } = this.props;

    if (focusTrapManager) {
      focusTrapManager.requestFocus();
    }
  }


  componentWillUnmount() {
    const { focusTrapManager } = this.props;

    if (focusTrapManager) {
      focusTrapManager.releaseFocus();
    }
  }

  setFocus() {
    this.setState(state => ({
      providerValue: Object.assign({}, state.providerValue, { isFocused: true }),
    }));
  }

  unsetFocus() {
    this.setState(state => ({
      providerValue: Object.assign({}, state.providerValue, { isFocused: false }),
    }));
  }

  render() {
    return (
      <FocusTrapManagerContext.Provider value={this.state.providerValue}>
        {this.props.children}
      </FocusTrapManagerContext.Provider>
    );
  }
}

FocusTrapManagerProvider.propTypes = propTypes;

export default withFocusTrapManager(FocusTrapManagerProvider);
