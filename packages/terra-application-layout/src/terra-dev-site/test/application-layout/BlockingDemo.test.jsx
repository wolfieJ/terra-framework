/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MemoryRouter, Link, withRouter, Prompt,
} from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import Input from 'terra-form-input';

import ApplicationLayout, { RoutingMenu, Utils } from '../../../ApplicationLayout';
import SafeRoutingProvider from '../../../safe-routing/SafeRoutingProvider';
import SafeRoutingPrompt from '../../../safe-routing/SafeRoutingPrompt';
import withSafeRouting from '../../../safe-routing/withSafeRouting';

class DefaultBlockingContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBlocking1: false, isBlocking2: false };
  }

  render() {
    const { isBlocking1, isBlocking2 } = this.state;

    return (
      <div style={{ padding: '5px', height: '100%' }}>
        <p>This page uses the default blocking behavior. Multiple locks are broken.</p>
        <br />
        <Button text={isBlocking1 ? 'Unblock 1' : 'Block 1'} onClick={() => { this.setState({ isBlocking1: !isBlocking1 }); }} />
        {isBlocking1 && <Prompt message="Blocking for 1" />}
        <Button text={isBlocking2 ? 'Unblock 2' : 'Block 2'} onClick={() => { this.setState({ isBlocking2: !isBlocking2 }); }} />
        {isBlocking2 && <Prompt message="Blocking for 2" />}
        <br />
        <br />
        <Button
          text="Go to /c with standard routing"
          onClick={() => {
            this.props.history.push('/c');
          }}
        />
        <br />
        <Button
          text="Go to /c with safe routing"
          onClick={() => {
            this.props.safeRouting.push('/c');
          }}
        />
      </div>
    );
  }
}

class CustomBlockingContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBlocking1: false, isBlocking2: false };
  }

  render() {
    const { isBlocking1, isBlocking2 } = this.state;

    return (
      <div style={{ padding: '5px', height: '100%' }}>
        <p>This page uses a custom blocking implementation to allow multiple blocks and custom controls</p>
        <br />
        <Button text={isBlocking1 ? 'Unblock 1' : 'Block 1'} onClick={() => { this.setState({ isBlocking1: !isBlocking1 }); }} />
        {isBlocking1 && <SafeRoutingPrompt id="block-1" message="Blocking for 1" />}
        <Button text={isBlocking2 ? 'Unblock 2' : 'Block 2'} onClick={() => { this.setState({ isBlocking2: !isBlocking2 }); }} />
        {isBlocking2 && <SafeRoutingPrompt id="block-2" message="Blocking for 2" />}
        <br />
        <br />
        <Button
          text="Go to /c with standard routing"
          onClick={() => {
            this.props.history.push('/c');
          }}
        />
        <br />
        <Button
          text="Go to /c with safe routing"
          onClick={() => {
            this.props.safeRouting.push('/c');
          }}
        />
      </div>
    );
  }
}

const TestExtensions = () => (
  <Button text="Extensions" />
);

class InputHeaderBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.location.pathname,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Input
          value={this.state.path}
          onChange={(event) => {
            this.setState({
              path: event.target.value,
            });
          }}
        />
        <Button
          onClick={() => {
            this.props.history.push(this.state.path);
          }}
          text="Go"
        />
      </React.Fragment>
    );
  }
}

const InputHeader = withRouter(InputHeaderBase);

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  content: {
    '/a': {
      path: '/a',
      component: {
        default: {
          componentClass: withRouter(withSafeRouting(DefaultBlockingContent)),
          props: {
            contentName: 'A',
          },
        },
      },
    },
    '/b': {
      path: '/b',
      component: {
        default: {
          componentClass: withRouter(withSafeRouting(CustomBlockingContent)),
          props: {
            contentName: 'B',
          },
        },
      },
    },
    '/c': {
      path: '/c',
      component: {
        default: {
          componentClass: () => <div>C</div>,
          props: {
            contentName: 'C',
          },
        },
      },
    },
  },
};

const navigationItems = [{
  path: '/a',
  text: '/a',
}, {
  path: '/b',
  text: '/b',
}, {
  path: '/c',
  text: '/c',
}];

const indexPath = '/a';

const userAvatar = (
  <Avatar
    variant="user"
    alt="User, Test"
    ariaLabel="User, Test"
    key="user_avatar"
  />
);

const userData = {
  name: 'User, Test',
  detail: 'User Detail',
  photo: userAvatar,
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
const nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />,
});

class BlockingDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  render() {
    const { intl } = this.props;
    const { checkboxItemEnabled } = this.state;

    /**
     * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
     * standard rendering mode and within the menus in the compact rendering mode.
     *
     * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
     * generate the configuration for the standard set of utility options. If the standard configuration is not
     * desirable, an entirely custom configuration can be used instead.
     */
    const utilityConfig = Object.freeze({
      title: 'Test, User',
      accessory: userAvatar,
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: () => {},
    });

    return (
      <div style={{ height: '100%' }}>
        <MemoryRouter
          initialEntries={['/a']}
          initialIndex={0}
          getUserConfirmation={(message, callback) => {
            callback(confirm(message));
          }}
        >
          <SafeRoutingProvider>
            <ContentContainer
              header={(
                <InputHeader />
              )}
              fill
            >
              <ApplicationLayout
                nameConfig={nameConfig}
                utilityConfig={utilityConfig}
                routingConfig={routingConfig}
                navigationItems={navigationItems}
                extensions={<TestExtensions />}
                indexPath={indexPath}
                routeNotFoundComponent={(
                  <div style={{ height: '100%' }}>
                    <h1>404 Page Not Found</h1>
                    <Link to="/a">Go to /a</Link>
                  </div>
                )}
              />
            </ContentContainer>
          </SafeRoutingProvider>
        </MemoryRouter>
      </div>
    );
  }
}

BlockingDemo.propTypes = {
  intl: intlShape,
};

export default injectIntl(BlockingDemo);
