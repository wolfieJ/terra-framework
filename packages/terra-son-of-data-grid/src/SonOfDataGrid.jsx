import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import 'terra-base/lib/baseStyles';
import styles from './SonOfDataGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  childConfig: PropTypes.any,
  /**
   * The header passed to the table
   */
  headerConfig: PropTypes.any,
  /**
   * The header passed to the table
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  fill: false,
};

// const derp = {
//   header: {
//     [
//       {
//         metaData,
//         onSelect,
//         isSelected,
//         isSelectable,
//         node,
//       }
//     ]
//   },
//   items: [
//     {
//       metaData,
//       onSelect,
//       isSelected,
//       isSelectable,
//       cells: [
//         node,
//       ],
//     }
//   ],
// }

// const makeChildren = (children) => {

// };

const Table = ({
  childConfig,
  headerConfig,
  ...customProps
}) => {
  const tableClassNames = cx([
    'table',
    customProps.className,
  ]);

  return (
    <ContentContainer
      {...customProps}
      className={tableClassNames}
      role="grid"
      header={headerConfig}
    >
      {childConfig}
    </ContentContainer>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
