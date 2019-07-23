import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DemoComponent.module.scss';

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

const DemoComponent = ({ name, ...customProps }) => {
  const DemoComponentClassNames = cx([
    'demo-component',
    customProps.className,
  ]);

  return (<div {...customProps} className={DemoComponentClassNames}>{name}</div>);
};

DemoComponent.propTypes = propTypes;
DemoComponent.defaultProps = defaultProps;

export default DemoComponent;
