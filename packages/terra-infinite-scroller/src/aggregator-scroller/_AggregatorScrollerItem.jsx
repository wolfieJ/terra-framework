import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  children: PropTypes.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isRenderable: PropTypes.bool,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  scrollProps: PropTypes.object,
};

const defaultProps = {
  children: [],
  isRenderable: false,
  scrollProps: {},
};

const AggregatorScrollerItem = ({
  children,
  isRenderable,
  refCallback,
  scrollProps,
}) => React.cloneElement(children, { refCallback, isRenderable, scrollProps });

AggregatorScrollerItem.propTypes = propTypes;
AggregatorScrollerItem.defaultProps = defaultProps;

export default AggregatorScrollerItem;
