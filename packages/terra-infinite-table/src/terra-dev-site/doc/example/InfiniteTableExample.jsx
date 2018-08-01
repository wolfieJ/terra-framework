import React from 'react';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
// import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
// import styles from 'terra-infinite-table/lib/terra-dev-site/doc/example/InfiniteTableExample.scss';
import InfiniteTable from 'terra-infinite-table/lib/InfiniteTable';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

// const cx = classNames.bind(styles);

class InfiniteTableExample extends React.Component {
  constructor(props) {
    super(props);

    this.addMoreData = this.debounce(this.addMoreData.bind(this), 1000);
    this.handleOnChange0 = this.handleOnChange0.bind(this);
    this.handleOnChange1 = this.handleOnChange1.bind(this);

    this.state = { stillLoading: true, numberOfPages: 0, selectedIndexes0: [], selectedIndexes1: [] };
  }

  handleOnChange0(event, index) {
    this.setState({ selectedIndexes0: [index] });
  }

  handleOnChange1(event, index) {
    this.setState({ selectedIndexes1: [index] });
  }

  addMoreData() {
    const newState = { numberOfPages: this.state.numberOfPages + 1 };
    if (newState.numberOfPages > 10) {
      return;
    } else if (newState.numberOfPages > 9) {
      newState.stillLoading = false;
    }
    this.setState(newState);
  }

  debounce(fn, delay) {
    let timer = null;
    return (...args) => {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  render() {
    const rows = [];
    for (let i = 0; i < 3 * this.state.numberOfPages; i += 1) {
      rows.push(<InfiniteTable.Subheader key={`SUBHEADER-${i}`} content={`SubHeader-${i}`} />);
      for (let j = 0; j < 5; j += 1) {
        rows.push(
          <InfiniteTable.Row key={`${i}-${j}`}>
            <InfiniteTable.Cell content="John Smith" key="NAME" />
            <InfiniteTable.Cell content="123 Adams Drive" key="ADDRESS" />
            <InfiniteTable.Cell content="111-222-3333" key="PHONE_NUMBER" />
          </InfiniteTable.Row>,
        );
      }
    }

    const fullLoading = <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />;

    const progressLoading = (
      <OverlayContainer style={{ height: '80px', width: '100%' }}>
        <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
      </OverlayContainer>
    );


    const headerContent = [
      'Name',
      'Address',
      'Phone Number',
    ];

    return (
      <div style={{ height: '600px', width: '100%', position: 'relative', border: '1px solid black' }}>
        <InfiniteTable
          headerCellContent={headerContent}
          isFinishedLoading={!this.state.stillLoading}
          onRequestItems={this.addMoreData}
          initialLoadingIndicator={fullLoading}
          progressiveLoadingIndicator={progressLoading}
          onChange={this.handleOnChange0}
          selectedIndexes={this.state.selectedIndexes}
          isSelectable
          isStriped
        >
          {rows}
        </InfiniteTable>
      </div>
    );
  }
}
export default InfiniteTableExample;
