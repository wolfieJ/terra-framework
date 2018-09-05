import React from 'react';
import { withRouter, matchPath } from 'react-router-dom';

const ManagedRoutingContext = React.createContext({
  block: undefined,
  unblock: undefined,
  push: undefined,
  replace: undefined,
  isBlocked: false,
});

class ManagedRoutingProvider extends React.Component {
  constructor(props) {
    super(props);

    this.block = this.block.bind(this);
    this.push = this.push.bind(this);
    this.isBlocked = this.isBlocked.bind(this);
    this.getMessageString = this.getMessageString.bind(this);

    this.registeredComponentMap = {};

    this.state = {
      providerValue: {
        block: this.block,
        push: this.push,
      },
    };
  }

  block(id, message, callback) {
    this.registeredComponentMap[id] = message;

    if (this.unblock) {
      this.unblock();
    }

    this.unblock = this.props.history.block(`${'The page has unsaved changes. Do you wish to continue?\n\n'}${this.getMessageString()}`);

    return () => {
      delete this.registeredComponentMap[id];

      if (!this.isBlocked() && this.unblock) {
        this.unblock();
      }
    };
  }

  push(path, replace) {
    let actionType = 'push';
    if (replace) {
      actionType = 'replace';
    }

    if (!matchPath(this.props.location.pathname, path)) {
      return new Promise((resolve, reject) => {
        if (this.isBlocked()) {
          if (confirm(`${'From push: The page has unsaved changes. Do you wish to continue?\n\n'}${this.getMessageString()}`)) {
            if (this.unblock) {
              this.unblock();
            }

            this.props.history[actionType](path);
            resolve();
          } else {
            reject(new Error({
              reason: 'user-denied',
            }));
          }
        } else {
          if (this.unblock) {
            this.unblock();
          }

          this.props.history[actionType](path);
          resolve();
        }
      });
    }

    return Promise.reject(new Error({
      reason: 'duplicate-path',
    }));
  }

  isBlocked() {
    return Object.keys(this.registeredComponentMap).length;
  }

  getMessageString() {
    let messages = '';
    for (let i = 0, numberOfMessages = Object.keys(this.registeredComponentMap).length; i < numberOfMessages; i += 1) {
      messages += this.registeredComponentMap[Object.keys(this.registeredComponentMap)[i]];
      messages += '\n';
    }

    return messages;
  }

  render() {
    return (
      <ManagedRoutingContext.Provider value={this.state.providerValue}>
        {this.props.children}
      </ManagedRoutingContext.Provider>
    );
  }
}

const WrappedManagedRoutingProvider = withRouter(ManagedRoutingProvider);

const withManagedRouting = Component => (
  props => (
    <ManagedRoutingContext.Consumer>
      {managedRouting => (
        <Component {...props} managedRouting={managedRouting} />
      )}
    </ManagedRoutingContext.Consumer>
  )
);

export default {
  ManagedRoutingProvider: WrappedManagedRoutingProvider,
  ManagedRoutingContext,
  withManagedRouting,
};

export {
  WrappedManagedRoutingProvider as ManagedRoutingProvider,
  ManagedRoutingContext,
  withManagedRouting,
};
