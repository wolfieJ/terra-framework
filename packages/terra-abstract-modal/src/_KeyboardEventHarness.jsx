import React from 'react';
import PropTypes from 'prop-types';
import { withFocusTrapManager, focusTrapManagerShape } from 'terra-focus-trap-manager';

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  focusTrapManager: focusTrapManagerShape,
};

class KeyboardEventHarness extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(e) {
    const { focusTrapManager, onRequestClose } = this.props;

    if (onRequestClose && e.keyCode === KEYCODES.ESCAPE && !focusTrapManager.isPaused) {
      onRequestClose();
    }
  }

  render() {
    return this.props.children;
  }
}

KeyboardEventHarness.propTypes = propTypes;

export default withFocusTrapManager(KeyboardEventHarness);
