import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';
import styles from './ApplicationLoadingOverlayProvider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be rendered within the context of the ApplicationLoadingOverlayProvider.
   * Components rendered here are able to interact with ApplicationLoadingOverlayProvider through
   * the ApplicationLoadingOverlayContext.
   */
  children: PropTypes.node,
  /**
   * A function to be called with the current ref of the scrollable element rendered within the
   * ApplicationLoadingOverlayProvider.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  scrollRefCallback: undefined,
};

const ApplicationLoadingOverlayProvider = ({
  children,
  scrollRefCallback,
}) => {
  const [loadingIndicators, setLoadingIndicators] = React.useState({});

  const contextValue = useMemo(() => ({
    show: (key, message) => {
      setLoadingIndicators(state => (
        {
          ...state,
          [`${key}`]: message,
        }
      ));
    },
    hide: (key) => {
      setLoadingIndicators((state) => {
        const newLoadingIndicators = { ...state };
        delete newLoadingIndicators[key];

        return newLoadingIndicators;
      });
    },
  }), []);

  const registeredOverlayKeys = Object.keys(loadingIndicators);
  const overlay = (
    <LoadingOverlay
      isRelativeToContainer
      isAnimated
      isOpen={!!registeredOverlayKeys.length}
      message={Object.keys(loadingIndicators).map(key => (
        loadingIndicators[key]
      )).join(', ')}
    />
  );

  return (
    <OverlayContainer
      className={cx('container')}
      overlay={overlay}
    >
      <Scroll refCallback={scrollRefCallback}>
        <ApplicationLoadingOverlayContext.Provider value={contextValue}>
          {children}
        </ApplicationLoadingOverlayContext.Provider>
      </Scroll>
    </OverlayContainer>
  );
};

ApplicationLoadingOverlayProvider.propTypes = propTypes;
ApplicationLoadingOverlayProvider.defaultProps = defaultProps;

export default ApplicationLoadingOverlayProvider;
