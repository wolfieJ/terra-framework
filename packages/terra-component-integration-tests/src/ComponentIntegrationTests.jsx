import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ComponentIntegrationTests.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const ComponentIntegrationTests = ({ name, ...customProps }) => {
  const ComponentIntegrationTestsClassNames = cx([
    'component-integration-tests',
    customProps.className,
  ]);

  return (<div {...customProps} className={ComponentIntegrationTestsClassNames}>{name}</div>);
};

ComponentIntegrationTests.propTypes = propTypes;
ComponentIntegrationTests.defaultProps = defaultProps;

export default ComponentIntegrationTests;
