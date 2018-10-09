import React from 'react';
import PropTypes from 'prop-types';
import { safeRoutingShape } from './SafeRoutingProvider';
import withSafeRouting from './withSafeRouting';

const propTypes = {
  safeRouting: safeRoutingShape,
  id: PropTypes.string,
  message: PropTypes.string,
};

class SafeRoutingPrompt extends React.Component {
  componentDidMount() {
    this.unblock = this.props.safeRouting.block(this.props.id, this.props.message);
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return null;
  }
}

SafeRoutingPrompt.propTypes = propTypes;

export default withSafeRouting(SafeRoutingPrompt);
