import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_Dropdown.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content of the dropdown.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether the dropdown is presented above the target.
   */
  isAbove: PropTypes.bool,
  /**
   * Whether the dropdown is visible.
   */
  isEnabled: PropTypes.bool,
  /**
   * Callback function triggered when the dropdown resizes.
   */
  onResize: PropTypes.func.isRequired,
  /**
   * Callback function triggered for setting a ref to the dropdown.
   */
  refCallback: PropTypes.func.isRequired,
  /**
   * The attachment target.
   */
  // eslint-disable-next-line react/forbid-prop-types
  target: PropTypes.object.isRequired,
};

const defaultProps = {
  isAbove: false,
};

const AboveAttachment = {
  vertical: 'bottom',
  horizontal: 'start',
};

const BelowAttachment = {
  vertical: 'top',
  horizontal: 'start',
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children, isAbove, isEnabled, onResize, target, refCallback, ...customProps
    } = this.props;

    delete customProps.refCallback;

    const dropdownClasses = cx([
      'dropdown',
      { 'is-above': isAbove },
      customProps.className,
    ]);

    return (
      <div ref={(node) => { refCallback(node); this.dropdown = node; }} className={dropdownClasses}>
        {children}
      </div>
    );
  }

}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
