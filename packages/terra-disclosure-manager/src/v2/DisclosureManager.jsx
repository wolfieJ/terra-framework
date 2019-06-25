import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { NavigationPromptCheckpoint } from 'terra-navigation-prompt';
import DisclosureManagerDelegate from '../DisclosureManagerDelegate';
import DisclosureManagerContext from '../DisclosureManagerContext';
import withDisclosureManager from '../withDisclosureManager';
import DisclosureHeaderContext from '../DisclosureHeaderContext';
import DisclosureHeaderAdapter from '../DisclosureHeaderAdapter';

const availableDisclosureSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  FULLSCREEN: 'fullscreen',
};

const arrayReducer = (mappingObject, value) => Object.assign({ [`${value}`]: value }, mappingObject);
const availableDisclosureHeights = [240, 420, 600, 690, 780, 870, 960, 1140].reduce(arrayReducer, {});
const availableDisclosureWidths = [320, 480, 560, 640, 800, 960, 1120, 1280, 1440, 1600, 1760, 1920].reduce(arrayReducer, {});

const defaultDimensions = { height: availableDisclosureHeights['690'], width: availableDisclosureWidths['1120'] };
const defaultSize = availableDisclosureSizes.SMALL;

const isValidDimensions = dimensions => availableDisclosureHeights[dimensions.height] && availableDisclosureWidths[dimensions.width];

// const isValidSize = size => !!availableDisclosureSizes[size.toUpperCase()];

const isValidSize = (size) => {
  if (typeof size === 'Object') {
    return isValidDimensions(size);
  } if (typeof size === 'String') {
    return availableDisclosureSizes[size.toUpperCase()];
  }
  return false;
};

export { availableDisclosureSizes, availableDisclosureHeights, availableDisclosureWidths };

const propTypes = {
  /**
   * The child components that will be provided the disclosure functionality.
   */
  children: PropTypes.node,
  /**
   * A function used to provide rendering capabilities to the DisclosureManager.
   */
  render: PropTypes.func.isRequired,
  /**
   * An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will
   * utilize its 'app' prop and forward the request instead of handling the request itself.
   */
  supportedDisclosureTypes: PropTypes.array,
  /**
   * A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all
   * disclose requests coming from disclosed components, regardless of the preferred disclosure type.
   */
  trapNestedDisclosureRequests: PropTypes.bool,
  /**
   * An Object (or a function that returns an Object) that defines the strings presented to the user by the DisclosureManager's NavigationPromptCheckpoints.
   */
  navigationPromptOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    rejectButtonText: PropTypes.string,
    acceptButtonText: PropTypes.string,
    emphasizedAction: PropTypes.oneOf(['accept', 'reject']),
  })]).isRequired,
  /**
   * A React component definition that will be instantiated to detect rendered NavigationPrompts.
   * The API of the provided component definition must match that of the default NavigationPromptCheckpoint.
   */
  navigationPromptCheckpointComponent: PropTypes.node,
  /**
   * @private
   * A DisclosureManagerDelegate instance provided by a parent DisclosureManager. This prop is automatically provided by `withDisclosureManager` and should not
   * be explicitly given to the component.
   */
  disclosureManager: DisclosureManagerDelegate.propType,
};

const defaultProps = {
  supportedDisclosureTypes: [],
  navigationPromptCheckpointComponent: NavigationPromptCheckpoint,
};

class DisclosureManager extends React.Component {
  /**
   * Clones the current disclosure component state objects and returns the structure for further mutation.
   */
  static cloneDisclosureState(state) {
    const newState = Object.assign({}, state);
    newState.disclosureComponentKeys = Object.assign([], newState.disclosureComponentKeys);
    newState.disclosureComponentData = Object.assign({}, newState.disclosureComponentData);

    return newState;
  }

  constructor(props) {
    super(props);

    this.generateChildComponentDelegate = this.generateChildComponentDelegate.bind(this);
    this.generateDisclosureComponentDelegate = this.generateDisclosureComponentDelegate.bind(this);

    this.disclosureTypeIsSupported = this.disclosureTypeIsSupported.bind(this);
    this.generatePopFunction = this.generatePopFunction.bind(this);

    this.openDisclosure = this.openDisclosure.bind(this);
    this.pushDisclosure = this.pushDisclosure.bind(this);
    this.popDisclosure = this.popDisclosure.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);

    this.state = {
      childComponentDelegate: this.generateChildComponentDelegate(),
      disclosureIsOpen: false,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
    };
  }

  generateChildComponentDelegate() {
    return DisclosureManagerDelegate.create({
      disclose: (data) => {
        if (this.state.disclosureIsOpen) {
          /**
           * A component is already disclosed, so we cannot present a new component.
           * The presented component must be dismissed first.
           */
          return Promise.reject();
        }

        if (this.disclosureTypeIsSupported(data.preferredType)) {
          const disclosedContentKey = uuidv4();

          return new Promise((resolve) => {
            this.openDisclosure(data, disclosedContentKey, () => {
              resolve({
                dismissDisclosure: this.generatePopFunction(disclosedContentKey),
              });
            });
          });
        }

        return this.props.disclosureManager.disclose(data);
      },
    });
  }

  generateDisclosureComponentDelegate(componentKey) {
    const popContent = this.generatePopFunction(componentKey);

    const delegate = {};

    /**
     * The disclose function provided will push content onto the disclosure stack.
     */
    delegate.disclose = (data) => {
      if (componentKey !== this.state.disclosureComponentKeys[this.state.disclosureComponentKeys.length - 1]) {
        /**
         * A component is already disclosed, so we cannot present a new component.
         * The presented component must be dismissed first.
         */
        return Promise.reject();
      }

      if (this.disclosureTypeIsSupported(data.preferredType) || this.props.trapNestedDisclosureRequests) {
        const disclosedContentKey = uuidv4();

        return new Promise((resolve) => {
          this.pushDisclosure(data, disclosedContentKey, () => {
            resolve({
              dismissDisclosure: this.generatePopFunction(disclosedContentKey),
            });
          });
        });
      }

      return this.props.disclosureManager.disclose(data);
    };

    /**
     * Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack,
     * the disclosure is closed.
     */
    delegate.dismiss = popContent;

    /**
     * Allows a component to update its currently presented size.
     */
    delegate.setSize = size => new Promise((resolve, reject) => {
      // TODO: validate size here
      if (false) {
        reject();
      }

      this.setState(state => ({
        disclosureComponentData: Object.assign({}, state.disclosureComponentData, {
          [componentKey]: Object.assign({}, state.disclosureComponentData[componentKey], {
            size,
          }),
        }),
      }), resolve);
    });

    return DisclosureManagerDelegate.create(delegate);
  }

  /**
   * Determines if the provided disclosure type is supported by the DisclosureManager.
   * @return `true` if the type is supported or if there is no fallback `disclosureManager` present. `false` is returned otherwise.
   */
  disclosureTypeIsSupported(type) {
    const { disclosureManager, supportedDisclosureTypes } = this.props;

    return supportedDisclosureTypes.indexOf(type) >= 0 || !disclosureManager;
  }

  openDisclosure(data, key) {
    const newState = {
      disclosureIsOpen: true,
      disclosureComponentKeys: [key],
      disclosureComponentData: {
        [key]: {
          key,
          name: data.content ? data.content.name : undefined,
          props: data.content ? data.content.props : undefined,
          component: data.component || (data.content ? data.content.component : undefined),
          size: data.size,
          onDismiss: data.onDismiss,
          checkpointRef: React.createRef(),
          delegateValue: this.generateDisclosureComponentDelegate(key),
          headerAdapterContextValue: (title, actions) => {
            this.setState(state => ({
              disclosureComponentData: Object.assign({}, state.disclosureComponentData, {
                [key]: Object.assign({}, state.disclosureComponentData[key], {
                  headerAdapterData: { title, actions },
                }),
              }),
            }));
          },
          headerAdapterData: undefined,
        },
      },
    };

    this.setState(newState);
  }

  pushDisclosure(data, key, callback) {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    newState.disclosureComponentKeys.push(key);
    newState.disclosureComponentData[key] = {
      key,
      size: data.size,
      component: data.component,
      onDismiss: data.onDismiss,
      checkpointRef: React.createRef(),
      delegateValue: this.generateDisclosureComponentDelegate(key),
      headerAdapterContextValue: (title, actions) => {
        this.setState(state => ({
          disclosureComponentData: Object.assign({}, state.disclosureComponentData, {
            [key]: Object.assign({}, state.disclosureComponentData[key], {
              headerAdapterData: { title, actions },
            }),
          }),
        }));
      },
      headerAdapterData: undefined,
    };

    this.setState(newState, callback);
  }

  popDisclosure(callback) {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    const poppedComponentKey = newState.disclosureComponentKeys.pop();
    delete newState.disclosureComponentData[poppedComponentKey];

    if (!newState.disclosureComponentKeys.length) {
      newState.disclosureIsOpen = false;
    }

    this.setState(newState, callback);
  }

  /**
   * Creates an instance of a pop function for the component represented by the given key.
   */
  generatePopFunction(key) {
    return (dismissData) => {
      const { disclosureComponentKeys, disclosureComponentData } = this.state;

      const disclosedComponentData = disclosureComponentData[key];

      if (disclosureComponentKeys[disclosureComponentKeys.length - 1] !== key) {
        /**
         * Only the top-most component can be dismissed. If the top component key in the disclosure stack does not match
         * the key used to generate this function, then the pop action is rejected.
         */
        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        disclosedComponentData.checkpointRef.current.resolvePrompts(this.props.navigationPromptOptions).then(() => {
          this.popDisclosure(() => {
            resolve();
          });
        }).catch(reject);
      }).then(() => {
        if (disclosedComponentData.onDismiss) {
          disclosedComponentData.onDismiss(dismissData);
        }
      });
    };
  }

  render() {
    const { render, children, navigationPromptCheckpointComponent } = this.props;
    const {
      childComponentDelegate,
      disclosureIsOpen,
      disclosureComponentKeys,
      disclosureComponentData,
    } = this.state;

    if (!render) {
      return null;
    }

    const dismissTopDisclosure = this.generatePopFunction(disclosureIsOpen ? disclosureComponentKeys[disclosureComponentKeys.length - 1] : undefined);

    const disclosureComponents = disclosureComponentKeys.reduce((accumulator, key) => {
      const componentData = {};

      componentData.component = (
        <DisclosureHeaderContext.Provider value={disclosureComponentData[key].headerAdapterContextValue} key={key}>
          <DisclosureManagerContext.Provider value={disclosureComponentData[key].delegateValue} key={key}>
            {React.createElement(navigationPromptCheckpointComponent, {
              ref: disclosureComponentData[key].checkpointRef,
              key,
            }, disclosureComponentData[key].component)}
          </DisclosureManagerContext.Provider>
        </DisclosureHeaderContext.Provider>
      );

      componentData.size = disclosureComponentData[key].size;
      componentData.headerAdapter = disclosureComponentData[key].registeredHeaderData;

      accumulator[key] = componentData;
      return accumulator;
    }, {});

    return render({
      disclosureIsOpen,
      disclosureComponentKeys,
      disclosureComponentData: disclosureComponents,
      children: (
        <DisclosureManagerContext.Provider value={childComponentDelegate}>
          {children}
        </DisclosureManagerContext.Provider>
      ),
      dismissPresentedComponent: dismissTopDisclosure,
    });
  }
}

DisclosureManager.propTypes = propTypes;
DisclosureManager.defaultProps = defaultProps;

const disclosureManagerShape = DisclosureManagerDelegate.propType;

export default withDisclosureManager(DisclosureManager);
export {
  withDisclosureManager, disclosureManagerShape, DisclosureHeaderAdapter, DisclosureHeaderContext,
};
