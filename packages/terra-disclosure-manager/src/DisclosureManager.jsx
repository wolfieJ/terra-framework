import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { NavigationPromptCheckpoint } from 'terra-navigation-prompt';
import DisclosureManagerDelegate from './DisclosureManagerDelegate';
import DisclosureManagerContext from './DisclosureManagerContext';
import withDisclosureManager from './withDisclosureManager';
import DisclosureHeaderContext from './DisclosureHeaderContext';
import DisclosureHeaderAdapter from './DisclosureHeaderAdapter';

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

const isValidSize = size => !!availableDisclosureSizes[size.toUpperCase()];

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
    newState.disclosureComponentDelegates = Object.assign([], newState.disclosureComponentDelegates);

    return newState;
  }

  constructor(props) {
    super(props);

    this.generateChildComponentDelegate = this.generateChildComponentDelegate.bind(this);
    this.generateDisclosureComponentDelegate = this.generateDisclosureComponentDelegate.bind(this);

    this.resolveDismissPromise = this.resolveDismissPromise.bind(this);
    this.resolveDismissChecksInSequence = this.resolveDismissChecksInSequence.bind(this);

    this.disclosureTypeIsSupported = this.disclosureTypeIsSupported.bind(this);
    this.safelyCloseDisclosure = this.safelyCloseDisclosure.bind(this);
    this.generatePopFunction = this.generatePopFunction.bind(this);

    this.openDisclosure = this.openDisclosure.bind(this);
    this.pushDisclosure = this.pushDisclosure.bind(this);
    this.popDisclosure = this.popDisclosure.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.requestDisclosureFocus = this.requestDisclosureFocus.bind(this);
    this.releaseDisclosureFocus = this.releaseDisclosureFocus.bind(this);
    this.maximizeDisclosure = this.maximizeDisclosure.bind(this);
    this.minimizeDisclosure = this.minimizeDisclosure.bind(this);

    // These cached functions are stored outside of state to prevent unnecessary rendering.
    this.dismissChecks = {};
    this.onDismissResolvers = {};

    this.state = {
      childComponentDelegate: this.generateChildComponentDelegate(),
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
      disclosureComponentDelegates: [],
      disclosureComponentHeaderContextValues: {},
    };
  }

  generateChildComponentDelegate() {
    return DisclosureManagerDelegate.create({
      disclose: (data) => {
        if (this.disclosureTypeIsSupported(data.preferredType)) {
          const disclosedContentKey = uuidv4();

          return this.safelyCloseDisclosure()
            .then(() => {
              this.openDisclosure(data, disclosedContentKey);
              /**
               * The disclose Promise chain is resolved with a set of APIs that the disclosing content can use to
               * manipulate the disclosure, if necessary.
               */
              return {
                /**
                 * The afterDismiss value is a deferred Promise that will be resolved when the disclosed component is dismissed.
                 */
                afterDismiss: new Promise((resolve) => {
                  this.onDismissResolvers[disclosedContentKey] = resolve;
                }),
                /**
                 * The dismissDisclosure value is a function that the disclosing component can use to manually close the disclosure.
                 * Any and all dismiss checks are still performed.
                 */
                dismissDisclosure: this.safelyCloseDisclosure,
              };
            });
        }

        return this.props.disclosureManager.disclose(data);
      },
    });
  }

  generateDisclosureComponentDelegate(componentKey, disclosureState) {
    const {
      disclosureComponentData, disclosureIsMaximized, disclosureIsFocused, disclosureSize,
    } = disclosureState;

    const componentData = disclosureComponentData[componentKey];
    const isFullscreen = disclosureSize === availableDisclosureSizes.FULLSCREEN;
    const popContent = this.generatePopFunction(componentData.key);

    const delegate = {};

    /**
     * The disclose function provided will push content onto the disclosure stack.
     */
    delegate.disclose = (data) => {
      if (this.props.trapNestedDisclosureRequests || this.disclosureTypeIsSupported(data.preferredType)) {
        const disclosedContentKey = uuidv4();

        return new Promise((resolve) => {
          this.pushDisclosure(data, disclosedContentKey, () => {
            resolve({
              afterDismiss: new Promise((afterDismissResolve) => {
                this.onDismissResolvers[disclosedContentKey] = afterDismissResolve;
              }),
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

    // /**
    //  * Allows a component to close the entire disclosure stack.
    //  */
    // delegate.closeDisclosure = popContent;

    /**
     * Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is
     * only provided to components in the stack that have a previous sibling.
     */
    // delegate.goBack = componentIndex > 0 ? popContent : undefined;

    /**
     * Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap.
     */
    delegate.requestFocus = disclosureIsFocused ? () => Promise.resolve().then(this.releaseDisclosureFocus) : undefined;

    /**
     * Allows a component to release focus from itself and return it to the disclosure.
     */
    delegate.releaseFocus = !disclosureIsFocused ? () => Promise.resolve().then(this.requestDisclosureFocus) : undefined;

    /**
     * Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.
     */
    delegate.maximize = (!isFullscreen && !disclosureIsMaximized) ? () => (Promise.resolve().then(this.maximizeDisclosure)) : undefined;

    /**
     * Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.
     */
    delegate.minimize = (!isFullscreen && disclosureIsMaximized) ? () => (Promise.resolve().then(this.minimizeDisclosure)) : undefined;

    /**
     * Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.
     */
    delegate.registerDismissCheck = (checkFunc) => {
      const { disclosureManager } = this.props;

      this.dismissChecks[componentData.key] = checkFunc;

      if (disclosureManager && disclosureManager.registerDismissCheck) {
        // The combination of all managed dismiss checks is registered to the parent app delegate to ensure
        // that all are accounted for by the parent.
        // eslint-disable-next-line compat/compat
        return disclosureManager.registerDismissCheck(() => Promise.all(Object.values(this.dismissChecks)));
      }

      return Promise.resolve();
    };

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
    let { dimensions } = data;
    if (dimensions && !isValidDimensions(dimensions)) {
      // dimensions were provided, but are invalid, set the default
      dimensions = defaultDimensions;
    }

    // eslint-disable-next-line prefer-destructuring
    let size = data.size;
    if (!size || (size && !isValidSize(size))) {
      // no valid size passed
      if (!dimensions) {
        // no valid size and no valid dimensions, set the default
        dimensions = defaultDimensions;
      }
      // ensure size set for pacivity
      size = defaultSize;
    }

    const newState = {
      disclosureIsOpen: true,
      disclosureIsFocused: true,
      disclosureSize: size,
      disclosureDimensions: dimensions,
      disclosureComponentKeys: [key],
      disclosureComponentData: {
        [key]: {
          key,
          name: data.content ? data.content.name : undefined,
          props: data.content ? data.content.props : undefined,
          component: data.component || (data.content ? data.content.component : undefined),
          size: data.size,
          dimensions: data.dimensions,
          onDismiss: data.onDismiss,
          checkpointRef: React.createRef(),
        },
      },
    };
    newState.disclosureComponentDelegates = [this.generateDisclosureComponentDelegate(key, newState)];
    newState.disclosureComponentHeaderContextValues = {
      [key]: (title, actions) => {
        this.setState(state => ({
          registeredHeaderData: Object.assign({}, state.registeredHeaderData, {
            [key]: {
              title, actions,
            },
          }),
        }));
      },
    };

    this.setState(newState);
  }

  pushDisclosure(data, key, callback) {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    newState.disclosureComponentKeys.push(key);
    newState.disclosureComponentData[key] = {
      key,
      name: data.content ? data.content.name : undefined,
      props: data.content ? data.content.props : undefined,
      component: data.component || (data.content ? data.content.component : undefined),
      onDismiss: data.onDismiss,
      size: data.size,
      dimensions: data.dimensions,
      checkpointRef: React.createRef(),
    };
    newState.disclosureComponentDelegates = newState.disclosureComponentDelegates.concat(this.generateDisclosureComponentDelegate(key, newState));
    newState.disclosureComponentHeaderContextValues[key] = (title, actions) => {
      this.setState(state => ({
        registeredHeaderData: Object.assign({}, state.registeredHeaderData, {
          [key]: {
            title, actions,
          },
        }),
      }));
    };

    this.setState(newState, callback);
  }

  popDisclosure(callback) {
    const newState = DisclosureManager.cloneDisclosureState(this.state);

    const poppedComponentKey = newState.disclosureComponentKeys.pop();
    newState.disclosureComponentData[poppedComponentKey] = undefined;
    newState.disclosureComponentDelegates.pop();
    newState.disclosureComponentHeaderContextValues[poppedComponentKey] = undefined;
    newState.registeredHeaderData[poppedComponentKey] = undefined;

    this.setState(newState, callback);
  }

  closeDisclosure(callback) {
    this.setState({
      disclosureIsOpen: false,
      disclosureIsFocused: false,
      disclosureIsMaximized: false,
      disclosureSize: undefined,
      disclosureDimensions: undefined,
      disclosureComponentKeys: [],
      disclosureComponentData: {},
      disclosureComponentDelegates: [],
    }, callback);
  }

  requestDisclosureFocus() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsFocused = true;
    newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(key => this.generateDisclosureComponentDelegate(key, newState));

    this.setState(newState);
  }

  releaseDisclosureFocus() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsFocused = false;
    newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(key => this.generateDisclosureComponentDelegate(key, newState));

    this.setState(newState);
  }

  maximizeDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsMaximized = true;
    newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(key => this.generateDisclosureComponentDelegate(key, newState));

    this.setState(newState);
  }

  minimizeDisclosure() {
    const newState = DisclosureManager.cloneDisclosureState(this.state);
    newState.disclosureIsMaximized = false;
    newState.disclosureComponentDelegates = newState.disclosureComponentKeys.map(key => this.generateDisclosureComponentDelegate(key, newState));

    this.setState(newState);
  }

  /**
   * Looks up the deferred afterDismiss promise for the provided disclosure key and
   * resolves it.
   */
  resolveDismissPromise(key) {
    const resolve = this.onDismissResolvers[key];
    if (resolve) {
      resolve();
    }
    this.onDismissResolvers[key] = undefined;
  }

  /**
   * Resolves the dismiss checks for the current disclosure components in sequence. The Promise will either resolve if all checks resolve or
   * reject on the first detected rejection. This ensures that checks do not occur for components after the first rejection.
   */
  resolveDismissChecksInSequence(keys) {
    if (!keys.length) {
      return Promise.resolve();
    }

    const localKeys = keys.slice(0);

    return new Promise((resolve, reject) => {
      this.generatePopFunction(localKeys.pop())()
        .then(() => this.resolveDismissChecksInSequence(localKeys))
        .then(resolve)
        .catch((...e) => {
          reject(e);
        });
    });
  }

  /**
   * Closes the disclosure after calling all checks and resolving all deferred promises.
   * @return A Promise, resolved if the close was performed or rejected if it was not.
   */
  safelyCloseDisclosure() {
    /**
     * Before closing the disclosure, the dismiss checks for components in the stack are
     * executed in stack order. Components will be dismissed in order up until a rejection occurs, at which point
     * the blocking component will be presented.
     */
    return this.resolveDismissChecksInSequence(this.state.disclosureComponentKeys).then(() => {
      this.dismissChecks = {};
      this.closeDisclosure();
    });
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
         * If the top component key in the disclosure stack does not match
         * the key used to generate this function, or the key is undefined, then the pop action is rejected.
         */
        return Promise.reject();
      }

      let promiseRoot = Promise.resolve();
      const dismissCheck = this.dismissChecks[key];

      if (dismissCheck) {
        promiseRoot = dismissCheck();
      }

      return promiseRoot
        .then(() => {
          if (disclosedComponentData.checkpointRef.current) {
            return disclosedComponentData.checkpointRef.current.resolvePrompts(this.props.navigationPromptOptions);
          }

          return undefined;
        })
        .then(() => {
          if (disclosureComponentKeys.length === 1) {
            /**
             * If there is only one disclosed component, the disclosure is closed and all state is reset.
             */
            this.closeDisclosure(() => {
              this.resolveDismissPromise(key);

              if (disclosedComponentData.onDismiss) {
                disclosedComponentData.onDismiss();
              }
            });
          } else {
            this.popDisclosure(() => {
              this.resolveDismissPromise(key);

              if (disclosedComponentData.onDismiss) {
                disclosedComponentData.onDismiss();
              }
            });
          }
        });
    };
  }

  render() {
    const { render, children, navigationPromptCheckpointComponent } = this.props;
    const {
      childComponentDelegate,
      disclosureIsOpen,
      disclosureIsFocused,
      disclosureIsMaximized,
      disclosureSize,
      disclosureDimensions,
      disclosureComponentKeys,
      disclosureComponentData,
      disclosureComponentDelegates,
    } = this.state;

    if (!render) {
      return null;
    }

    const childComponents = (
      <DisclosureManagerContext.Provider value={childComponentDelegate}>
        {children}
      </DisclosureManagerContext.Provider>
    );

    const popFunction = this.generatePopFunction(disclosureComponentKeys ? disclosureComponentKeys[disclosureComponentKeys.length - 1] : undefined);

    const disclosureComponents = disclosureComponentKeys.reduce((accumulator, key, index) => {
      const componentData = {};

      componentData.component = (
        <DisclosureHeaderContext.Provider value={this.state.disclosureComponentHeaderContextValues[key]} key={key}>
          <DisclosureManagerContext.Provider value={disclosureComponentDelegates[index]} key={key}>
            {React.createElement(navigationPromptCheckpointComponent, {
              ref: disclosureComponentData[key].checkpointRef,
              key,
            }, disclosureComponentData[key].component)}
          </DisclosureManagerContext.Provider>
        </DisclosureHeaderContext.Provider>
      );

      componentData.size = disclosureComponentData[key].size;
      componentData.dimensions = disclosureComponentData[key].dimensions;

      accumulator[key] = componentData;
      return accumulator;
    }, {});

    return render({
      dismissPresentedComponent: popFunction,
      closeDisclosure: popFunction, // TODO: Evaluate whether closing a stack of disclosures all at one time makes functional sense. It might be better to close one at a time, even from the X button (or only showing back if back is available)
      maximizeDisclosure: !disclosureIsMaximized ? this.maximizeDisclosure : undefined,
      minimizeDisclosure: disclosureIsMaximized ? this.minimizeDisclosure : undefined,
      headerData: this.state.registeredHeaderData || {},
      disclosureComponentKeys,
      disclosureComponentData: disclosureComponents,
      childComponents,
      children: {
        components: childComponents,
      },
      disclosure: {
        isOpen: disclosureIsOpen,
        isFocused: disclosureIsFocused,
        isMaximized: disclosureIsMaximized,
        size: disclosureSize,
        dimensions: disclosureDimensions,
        components: disclosureComponentKeys.map(key => disclosureComponents[key].component),
      },
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
