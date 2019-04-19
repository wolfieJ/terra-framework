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
//   selectionKey,
//   columnWidths,
//   header: {
//     [
//       {
//         metaData,
//         onSelect,
//         isSelected,
//         isSelectable,
//         node,
//         width, //  ??
//         onColumnResize,
//       },
//     ],
//   },
//   items: [
//     {
//       metaData,
//       onSelect,
//       isSelected,
//       isSelectable,
//       cells: [
//         {
//           metaData,
//           onSelect,
//           isSelected,
//           isSelectable,
//           colSpan,
//           node,
//         },
//       ],
//     },
//   ],
// };

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

  // -ms-flex: {width} 0 auto;
  // flex: {width} 0 auto;
  // width: {width};
  // const style = { msFlex: `${newWidth} 0 auto`, flex: `${newWidth} 0 auto`, width: newWidth};
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
