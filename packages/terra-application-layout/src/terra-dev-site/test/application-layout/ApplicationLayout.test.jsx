/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MemoryRouter, Link, Prompt,
} from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import Image from 'terra-image';
import Avatar from 'terra-avatar';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';

import ApplicationLayout, { RoutingMenu, Utils } from '../../../ApplicationLayout';
import { withManagedRouting } from '../../../ManagedRouting';
import ContentPlaceholder from '../../../ContentPlaceholder';

class BaseManagedRoutingPrompt extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.unblock = this.props.managedRouting.block(this.props.id, this.props.message);
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

const ManagedRoutingPrompt = withManagedRouting(BaseManagedRoutingPrompt);

class PageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isBlockingFirst: false, isBlockingSecond: false };
  }

  render() {
    const { layoutConfig, contentName } = this.props;
    const { isBlockingFirst, isBlockingSecond } = this.state;

    return (
      <ContentContainer
        header={(
          <ActionHeader onBack={layoutConfig.toggleMenu} title={contentName} />
    )}
        fill
      >
        <div style={{ padding: '5px' }}>
          {contentName}
          <br />
          <Button text={isBlockingFirst ? 'Unblock' : 'Block Routing'} onClick={() => { this.setState({ isBlockingFirst: !isBlockingFirst }); }} />
          {this.state.isBlockingFirst && <ManagedRoutingPrompt id={`first-block-${contentName}`} message={`Blocking for ${contentName}`} />}
          <Button text={isBlockingSecond ? 'Unblock' : 'Block Routing Again'} onClick={() => { this.setState({ isBlockingSecond: !isBlockingSecond }); }} />
          {this.state.isBlockingSecond && <ManagedRoutingPrompt id={`second-content-${contentName}`} message={`Blocking for ${contentName} Again`} />}
        </div>
      </ContentContainer>
    );
  }
}

const TestExtensions = () => (
  <Button text="Extensions" />
);

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
const routingConfig = {
  menu: {
    '/food': {
      path: '/food',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Food Menu',
            menuItems: [{
              text: 'Hamburgers',
              path: '/food/hamburgers',
            }, {
              text: 'Hot Dogs',
              path: '/food/hot_dogs',
            }, {
              text: 'Pizza',
              path: '/food/pizza',
            }, {
              text: 'Cheese',
              path: '/food/cheese',
              hasSubMenu: true,
            }],
          },
        },
      },
    },
    '/food/cheese': {
      path: '/food/cheese',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Cheese Menu',
            menuItems: [{
              text: 'Mozzarella',
              path: '/food/cheese/mozzarella',
            }, {
              text: 'Cheddar',
              path: '/food/cheese/cheddar',
            }],
          },
        },
      },
    },
    '/drink': {
      path: '/drink',
      component: {
        default: {
          componentClass: RoutingMenu,
          props: {
            title: 'Drinks Menu',
            menuItems: [{
              text: 'Soda',
              path: '/drink/soda',
            }, {
              text: 'Beer',
              path: '/drink/beer',
            }, {
              text: 'Wine',
              path: '/drink/wine',
            }],
          },
        },
      },
    },
  },
  content: {
    '/food': {
      path: '/food',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/food/hamburgers',
            placeholderContent: <div>Wat</div>,
          },
        },
      },
    },
    '/food/cheese': {
      path: '/food/cheese',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/food/cheese/mozzarella',
            placeholderContent: <div>Wat</div>,
          },
        },
      },
    },
    '/drink': {
      path: '/drink',
      component: {
        default: {
          componentClass: ContentPlaceholder,
          props: {
            autoselectPath: '/drink/soda',
            placeholderContent: <div>Wat</div>,
          },
        },
      },
    },
    '/food/hamburgers': {
      path: '/food/hamburgers',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Hamburgers',
          },
        },
      },
    },
    '/food/hot_dogs': {
      path: '/food/hot_dogs',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Hot Dogs',
          },
        },
      },
    },
    '/food/pizza': {
      path: '/food/pizza',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Pizza',
          },
        },
      },
    },
    '/food/cheese/mozzarella': {
      path: '/food/cheese/mozzarella',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Mozzarella',
          },
        },
      },
    },
    '/food/cheese/cheddar': {
      path: '/food/cheese/cheddar',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Cheddar',
          },
        },
      },
    },
    '/drink/soda': {
      path: '/drink/soda',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Soda',
          },
        },
      },
    },
    '/drink/beer': {
      path: '/drink/beer',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Beer',
          },
        },
      },
    },
    '/drink/wine': {
      path: '/drink/wine',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Wine',
          },
        },
      },
    },
  },
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
const navigationItems = [{
  path: '/food',
  text: 'Food',
}, {
  path: '/drink',
  text: 'Drink',
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
const indexPath = '/food';

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

class ApplicationLayoutTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxItemEnabled: false,
    };
  }

  componentDidMount() {
    // if (!matchPath(this.props.location.pathname, '/food') || !matchPath(this.props.location.pathname, '/drink')) {
    //   this.props.history.push('/food');
    // }
  }

  render() {
    const { intl } = this.props;
    const { checkboxItemEnabled } = this.state;

    const customUtilityItems = [{
      key: 'additional-1',
      title: 'Drill-in Item',
      childKeys: [
        'additional-sub-1',
        'additional-sub-2',
      ],
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-sub-1',
      title: 'Additional Item 1 - Sub 1',
      parentKey: 'additional-1',
    }, {
      key: 'additional-sub-2',
      title: 'Additional Item 1 - Sub 2',
      parentKey: 'additional-1',
    }, {
      key: 'checkbox-item',
      title: 'Custom Checkbox Item',
      isSelectable: true,
      isSelected: checkboxItemEnabled,
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }, {
      key: 'additional-3',
      contentLocation: Utils.utilityHelpers.locations.FOOTER,
      title: 'Custom Footer',
      parentKey: Utils.utilityHelpers.defaultKeys.MENU,
    }];

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
      menuItems: Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
      initialSelectedKey: Utils.utilityHelpers.defaultKeys.MENU,
      onChange: () => {},
    });

    return (
      <div style={{ height: '100%' }}>
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
              <Link to="/food">Go to Food</Link>
            </div>
          )}
          router={<MemoryRouter initialEntries={['/food']} initialIndex={0} />}
        />
      </div>
    );
  }
}

ApplicationLayoutTest.propTypes = {
  intl: intlShape,
};

const WrappedApplication = injectIntl(ApplicationLayoutTest);

const AppRouter = () => (
  <WrappedApplication />
);

export default AppRouter;
