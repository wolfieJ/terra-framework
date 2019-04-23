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
  children: PropTypes.node,
  /**
   * The children passed to the component
   */
  columnWidths: PropTypes.array,
  /**
   * The header passed to the table
   */
  header: PropTypes.element,
  /**
   * The header passed to the table
   */
  fill: PropTypes.bool,
  // /**
  //  * Function that is called when a resizable column is resized. Parameters: `onRequestColumnResize(columnId, requestedWidth)`
  //  */
  // onRequestColumnResize: PropTypes.func,
  // /**
  //  * Function that is called when a collapsible section is selected. Parameters: `onRequestSectionCollapse(sectionId)`
  //  */
  // onRequestSectionCollapse: PropTypes.func,
};

const defaultProps = {
  fill: false,
};

const API = {
  columnWidths: [],
  header: element,
  children: [],
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
