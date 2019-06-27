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

const logWarning = (message) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-console */
    console.warn(message);
    /* eslint-enable no-console */
  }
};

const validateSize = (size) => {
  if (typeof size === 'object') {
    if (availableDisclosureHeights[size.height] && availableDisclosureWidths[size.width]) {
      return size;
    }
  } else if (typeof size === 'string') {
    if (availableDisclosureSizes[size.toUpperCase()]) {
      return size;
    }
  }

  logWarning(`DisclosureManager: Invalid size provided - ${size}. The default size will be used instead.`);
  return availableDisclosureSizes.SMALL;
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

class DisclosureManagerV2 extends React.Component {
  /**
   * Clones the current disclosure component state objects and returns the structure for further mutation.
   */
  static cloneDisclosureState(state) {
    const newState = Object.assign({}, state);
    newState.disclosureComponentKeys = [...newState.disclosureComponentKeys];
    newState.disclosureComponentData = { ...newState.disclosureComponentData };

    return newState;
  }

  constructor(props) {
    super(props);

    this.generateChildComponentDelegate = this.generateChildComponentDelegate.bind(this);
    this.generateDisclosureComponentDelegate = this.generateDisclosureComponentDelegate.bind(this);

    this.generatePopFunction = this.generatePopFunction.bind(this);
    this.buildPublicDisclosureComponentObject = this.buildPublicDisclosureComponentObject.bind(this);
    this.buildStateForDisclosureComponent = this.buildStateForDisclosureComponent.bind(this);

    this.pushDisclosure = this.pushDisclosure.bind(this);
    this.popDisclosure = this.popDisclosure.bind(this);

    this.state = {
      childComponentDelegate: this.generateChildComponentDelegate(),
      disclosureComponentKeys: [],
      disclosureComponentData: {},
    };
  }

  generateChildComponentDelegate() {
    return DisclosureManagerDelegate.create({
      disclose: (data) => {
        /**
         * If the disclosure is already open, a component must have been disclosed already.
         * Another disclosure cannot be presented until the previous disclosure is dismissed,
         * so the request is rejected.
         */

        if (this.state.disclosureComponentKeys.length) {
          logWarning('DisclosureManager: Disclosure request from within stack was ignored.');
          return Promise.reject();
        }

        /**
         * If the component is missing from the disclose request, the disclosure stack is not manipulated
         * and the request is rejected.
         */
        if (!data.component) {
          logWarning('DisclosureManager: Disclosure request without component was ignored.');
          return Promise.reject();
        }

        /**
         * If the preferred disclosure type is not supported by this instance of the
         * DisclosureManager, the disclose request is deferred to the disclosureManager prop,
         * if available.
         */
        if (this.props.supportedDisclosureTypes.indexOf(data.preferredType) === -1 && this.props.disclosureManager) {
          return this.props.disclosureManager.disclose(data);
        }

        const disclosedContentKey = uuidv4();

        return new Promise((resolve) => {
          this.pushDisclosure(data, disclosedContentKey, () => {
            resolve({
              dismissDisclosure: this.generatePopFunction(disclosedContentKey),
            });
          });
        });
      },
    });
  }

  generateDisclosureComponentDelegate(componentKey) {
    const delegate = {};

    /**
     * The disclose function provided will push content onto the disclosure stack.
     */
    delegate.disclose = (data) => {
      /**
       * If the component calling disclose is not the top-most component in the disclosure stack,
       * it must have disclosed something already. Another disclosure cannot be presented until the
       * previous disclosure is dismissed, so the request is rejected.
       */
      if (componentKey !== this.state.disclosureComponentKeys[this.state.disclosureComponentKeys.length - 1]) {
        logWarning('DisclosureManager: Disclosure request from interior stack component was ignored.');
        return Promise.reject();
      }

      /**
       * If the component is missing from the disclose request, the disclosure stack is not manipulated
       * and the request is rejected.
       */
      if (!data.component) {
        logWarning('DisclosureManager: Disclosure request without component was ignored.');
        return Promise.reject();
      }

      /**
       * If the preferred disclosure type is not supported by this instance of the
       * DisclosureManager, and the trapNestedDisclosureRequests prop is not active,
       * the disclose request is deferred to the disclosureManager prop, if available.
       */
      if (this.props.supportedDisclosureTypes.indexOf(data.preferredType) === -1
          && this.props.disclosureManager
          && !this.props.trapNestedDisclosureRequests) {
        return this.props.disclosureManager.disclose(data);
      }

      const disclosedContentKey = uuidv4();

      return new Promise((resolve) => {
        this.pushDisclosure(data, disclosedContentKey, () => {
          resolve({
            dismissDisclosure: this.generatePopFunction(disclosedContentKey),
          });
        });
      });
    };

    /**
     * Allows a component to update its currently presented size.
     */
    delegate.setSize = size => new Promise((resolve) => {
      this.setState(state => ({
        disclosureComponentData: Object.assign({}, state.disclosureComponentData, {
          [componentKey]: Object.assign({}, state.disclosureComponentData[componentKey], {
            size: validateSize(size),
          }),
        }),
      }), resolve);
    });

    return DisclosureManagerDelegate.create(delegate);
  }

  buildStateForDisclosureComponent(data, key) {
    return {
      key,
      component: data.component,
      size: validateSize(data.size),
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
  }

  pushDisclosure(data, key, callback) {
    const newState = DisclosureManagerV2.cloneDisclosureState(this.state);

    newState.disclosureComponentKeys.push(key);
    newState.disclosureComponentData[key] = this.buildStateForDisclosureComponent(data, key);

    this.setState(newState, callback);
  }

  popDisclosure(callback) {
    const newState = DisclosureManagerV2.cloneDisclosureState(this.state);

    const poppedComponentKey = newState.disclosureComponentKeys.pop();
    delete newState.disclosureComponentData[poppedComponentKey];

    this.setState(newState, callback);
  }

  /**
   * Creates an instance of a pop function for the component represented by the given key.
   */
  generatePopFunction(key) {
    return () => {
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
          this.popDisclosure(resolve);
        }).catch(reject);
      }).then(() => {
        if (disclosedComponentData.onDismiss) {
          disclosedComponentData.onDismiss();
        }
      });
    };
  }

  buildPublicDisclosureComponentObject() {
    const { navigationPromptCheckpointComponent } = this.props;
    const {
      disclosureComponentKeys,
      disclosureComponentData,
    } = this.state;

    return disclosureComponentKeys.reduce((accumulator, key) => {
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
      componentData.headerAdapter = disclosureComponentData[key].headerAdapterData;

      accumulator[key] = componentData;
      return accumulator;
    }, {});
  }

  render() {
    const { render, children } = this.props;
    const {
      childComponentDelegate,
      disclosureComponentKeys,
    } = this.state;

    if (!render) {
      return null;
    }

    return render({
      disclosureComponentKeys,
      disclosureComponentData: this.buildPublicDisclosureComponentObject(),
      wrappedChildren: (
        <DisclosureManagerContext.Provider value={childComponentDelegate}>
          {children}
        </DisclosureManagerContext.Provider>
      ),
      popDisclosureStack: this.generatePopFunction(disclosureComponentKeys.length ? disclosureComponentKeys[disclosureComponentKeys.length - 1] : undefined),
    });
  }
}

DisclosureManagerV2.propTypes = propTypes;
DisclosureManagerV2.defaultProps = defaultProps;

const disclosureManagerShape = DisclosureManagerDelegate.propType;

export default withDisclosureManager(DisclosureManagerV2);
export {
  withDisclosureManager, disclosureManagerShape, DisclosureHeaderAdapter, DisclosureHeaderContext,
};
