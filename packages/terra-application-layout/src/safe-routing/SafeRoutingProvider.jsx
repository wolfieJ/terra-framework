import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import { injectIntl, intlShape } from 'terra-base';
import { presentNotificationDialog } from '../StatelessNotificationDialog';

import SafeRoutingContext from './SafeRoutingContext';

class SafeRoutingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.block = this.block.bind(this);
    this.push = this.push.bind(this);
    this.isBlocked = this.isBlocked.bind(this);
    this.getMessageString = this.getMessageString.bind(this);
    this.setupBackupBlock = this.setupBackupBlock.bind(this);
    this.removeBackupBlock = this.removeBackupBlock.bind(this);

    this.registeredComponentMap = {};

    this.state = {
      providerValue: {
        block: this.block,
        push: this.push,
      },
    };
  }

  setupBackupBlock() {
    this.unblock = this.props.history.block('The page has unsaved changes. Do you wish to continue?');
  }

  removeBackupBlock() {
    if (this.unblock) {
      this.unblock();
    }
  }

  block(id, message) {
    this.registeredComponentMap[id] = {
      message,
    };

    this.removeBackupBlock();
    this.setupBackupBlock();

    return () => {
      delete this.registeredComponentMap[id];

      if (!this.isBlocked()) {
        this.removeBackupBlock();
      }
    };
  }

  push(path, replace) {
    const { intl } = this.props;

    let actionType = 'push';
    if (replace) {
      actionType = 'replace';
    }

    /**
     * We cannot route to the same path.
     */
    if (matchPath(this.props.location.pathname, path)) {
      return Promise.reject(new Error('Duplicate path ignored'));
    }

    return new Promise((resolve, reject) => {
      if (this.isBlocked()) {
        presentNotificationDialog({
          intl,
          variant: 'warning',
          title: 'Unsaved Changes',
          message: `${'The page has unsaved changes. Do you wish to continue?\n\n'}${this.getMessageString()}`,
          primaryAction: {
            text: 'Yarp',
            onClick: () => {
              this.removeBackupBlock();

              this.props.history[actionType](path);
              resolve();
            },
          },
          secondaryAction: {
            text: 'Narp',
            onClick: () => {
              reject(new Error('Routing denied by user'));
            },
          },
        });
      } else {
        this.removeBackupBlock();

        this.props.history[actionType](path);
        resolve();
      }
    });
  }

  isBlocked() {
    return Object.keys(this.registeredComponentMap).length;
  }

  getMessageString() {
    let messages = '';
    for (let i = 0, numberOfMessages = Object.keys(this.registeredComponentMap).length; i < numberOfMessages; i += 1) {
      messages += this.registeredComponentMap[Object.keys(this.registeredComponentMap)[i]].message;
      messages += '\n';
    }

    return messages;
  }

  render() {
    return (
      <SafeRoutingContext.Provider value={this.state.providerValue}>
        {this.props.children}
      </SafeRoutingContext.Provider>
    );
  }
}

SafeRoutingProvider.propTypes = {
  intl: intlShape,
  children: PropTypes.node,
  history: PropTypes.object,
};

const safeRoutingShape = PropTypes.shape({
  block: PropTypes.func,
  push: PropTypes.func,
});

export default withRouter(injectIntl(SafeRoutingProvider));
export { safeRoutingShape };
