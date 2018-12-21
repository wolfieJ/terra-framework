# Terra Focus Trap Manager

The FocusTrapManager component facilitates communication and state orchestration among nested FocusTrap components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-focus-trap-manager`

## About

FocusTrap components are used in a number of components (modals, popups, etc.) to ensure that Tab-based keyboard focus does not leave a given component. However, problems arise when components that trap focus render child components that also trap focus. This problem is exacerbated by the level of composability that Terra wishes to provide with its component library, which prevents it from mitigating the problem directly through a restricted implementation strategy.

The FocusTrapManager solves this problem by automatically pausing focus traps based on the current component hierarchy. To take advantage of this functionality, components that render a FocusTrap need to ensure that they are wrapped by a FocusTrapManager and implement their FocusTrap based on the FocusTrapManager's state.

## Usage

The FocusTrapManager provides its children with on Object adhering to the following shape:

|key|type|description|
|---|---|---|
|`isPaused`|bool|A boolean flag indicating whether or not the FocusTrap within the FocusTrapManager should be paused.|

Components can use the `withFocusTrapManager` component generator to interface with the FocusTrapManager. The wrapped component will receive a prop named `focusTrapManager` that matches the shape above. If more control over the context interfacing is necessary, the FocusTrapManagerContext can be implemented directly

```jsx
import FocusTrap from 'focus-trap-react';
import { FocusTrapManager, withFocusTrap, FocusTrapManagerContext } from 'terra-focus-trap-manager';

const MyFocusTrap = withFocusTrapManager(({ focusTrapManager }) => (
  <FocusTrap paused={focusTrapManager.isPaused}>
    <div>Example Content</div>
  </FocusTrap>
));

// Alternatively...

const MyAlternativeFocusTrap = () => (
  <FocusTrapManagerContext.Consumer>
    {focustTrapManager => (
      <FocusTrap paused={focusTrapManager.isPaused}>
        <div>Example Content</div>
      </FocusTrap>
    )}
  </FocusTrapManagerContext.Consumer>
));

const MyComponent = (props) => (
  <FocusTrapManager>
    <MyFocusTrap {...props} />
  </FocusTrapManager>
)
```

The FocusTrapManager will, when nested within another FocusTrapManager, ensure that the parent FocusTrapManager pauses its FocusTrap while the child is mounted. The pausing of the parent FocusTrapManager will happen immediately upon mounting of the child and will happen automatically. A FocusTrapManager should not be rendered unless a FocusTrap will be rendered within it.

> The FocusTrapManager and FocusTrap could reasonably be combined into a single component. However, there are some scenarios where the 'isPaused' state of the manager is necessary to have outside of the FocusTrap (e.g. if keyboard events need to be suppressed when the FocusTrap is closed). For those use cases, the FocusTrapManager has been developed as a separate component.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
