import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './InfiniteContentRow.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  content: PropTypes.node.isRequired,
  /**
   * Number of columns the subheader must span
   */
  colSpan: PropTypes.number,
  /**
   * Function callback for the ref of the tr.
   */
  refCallback: PropTypes.func,
};

const InfiniteContentRow = ({
  content,
  colSpan,
  fill,
  refCallback,
  ...customProps
}) => {
  // Delete the isSelected and isSelectable values for the content row.
  delete customProps.isSelected;
  delete customProps.isSelectable;

  // count is based on the number of columns and assigned in the table component which contains this subheader
  return (
    <tr data-terra-table-subheader-row ref={refCallback}>
      <td {...customProps} className={cx('content-row', customProps.className)} colSpan={colSpan}>
        {content}
      </td>
    </tr>
  );
};

InfiniteContentRow.propTypes = propTypes;

export default InfiniteContentRow;
