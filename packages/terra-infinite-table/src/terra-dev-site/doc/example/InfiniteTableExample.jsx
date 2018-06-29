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

    // this.addMoreData = this.debounce(this.addMoreData.bind(this), 1000);
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

  // addMoreData() {
  //   const newState = { numberOfPages: this.state.numberOfPages + 1 };
  //   if (newState.numberOfPages > 10) {
  //     return;
  //   } else if (newState.numberOfPages > 9) {
  //     newState.stillLoading = false;
  //   }
  //   this.setState(newState);
  // }

  // debounce(fn, delay) {
  //   let timer = null;
  //   return (...args) => {
  //     const context = this;
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(context, args);
  //     }, delay);
  //   };
  // }

  render() {
    // const items = [];
    // for (let i = 0; i < 15 * this.state.numberOfPages; i += 1) {
    //   items.push(
    //     <InfiniteList.Item
    //       key={`${i}`}
    //       content={
    //         <Arrange
    //           fitStart={<h3 style={{ width: '50px' }}>{`${i}`}</h3>}
    //           fill={
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel.
    //               Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh.
    //               Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis.
    //               Aliquam eget maximus dui, ut rhoncus augue.
    //             </p>
    //           }
    //           fitEnd={<div className={cx(['icon-wrapper'])}><IconInformation /></div>}
    //           align="center"
    //           fitStartAttributes={{ style: { textAlign: 'center' } }}
    //         />
    //       }
    //     />,
    //   );
    // }

    const fullLoading = <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />;

    const progressLoading = (
      <OverlayContainer style={{ height: '80px', width: '100%' }}>
        <LoadingOverlay isOpen isAnimated isRelativeToContainer backgroundStyle="dark" />
      </OverlayContainer>
    );

    return (
      <div style={{ height: '600px', width: '100%', position: 'relative', border: '1px solid black' }}>
        <InfiniteTable
          isFinishedLoading={!this.state.stillLoading}
          onRequestItems={this.addMoreData}
          initialLoadingIndicator={fullLoading}
          progressiveLoadingIndicator={progressLoading}
        >
          <InfiniteTable.Rows
            onChange={this.handleOnChange0}
            key="ROWS_0"
            selectedIndexes={this.state.selectedIndexes}
            isSelectable
            isStriped
          >
            <InfiniteTable.Subheader key="SUBHEADER_0" content={'Sub Header 0'} />
            <InfiniteTable.Row key="PERSON_0" isSelected>
              <InfiniteTable.Cell content="John Smith" key="NAME" />
              <InfiniteTable.Cell content="123 Adams Drive" key="ADDRESS" />
              <InfiniteTable.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </InfiniteTable.Row>
            <InfiniteTable.Row key="PERSON_1">
              <InfiniteTable.Cell content="Jane Smith" key="NAME" />
              <InfiniteTable.Cell content="321 Drive Street" key="ADDRESS" />
              <InfiniteTable.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </InfiniteTable.Row>
            <InfiniteTable.Row key="PERSON_2">
              <InfiniteTable.Cell content="Dave Smith" key="NAME" />
              <InfiniteTable.Cell content="213 Raymond Road" key="ADDRESS" />
              <InfiniteTable.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </InfiniteTable.Row>
          </InfiniteTable.Rows>
          <InfiniteTable.Header key="HEADER_0">
            <InfiniteTable.HeaderCell content="Name" key="NAME" minWidth="small" />
            <InfiniteTable.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
            <InfiniteTable.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
          </InfiniteTable.Header>
          <InfiniteTable.Rows
            onChange={this.handleOnChange1}
            key="ROWS_1"
            selectedIndexes={this.state.selectedIndexes1}
            isSelectable
          >
            <InfiniteTable.Row key="THING_0" isSelected>
              <InfiniteTable.Cell content="Golf ball" key="OBJECT" />
              <InfiniteTable.Cell content="Plastic, Cork" key="INGREDIENTS" />
              <InfiniteTable.Cell content="111-222-3333" key="OBJECT" />
            </InfiniteTable.Row>
            <InfiniteTable.Row key="THING_1">
              <InfiniteTable.Cell content="Chamber Pot" key="OBJECT" />
              <InfiniteTable.Cell content="IRON" key="INGREDIENTS" />
              <InfiniteTable.Cell content="111-222-3333" key="SERIAL_NUMBER" />
            </InfiniteTable.Row>
            <InfiniteTable.Subheader key="SUBHEADER_1" content={'Sub 1'} />
            <InfiniteTable.Row key="THING_2">
              <InfiniteTable.Cell content="Onion" key="OBJECT" />
              <InfiniteTable.Cell content="Onion" key="INGREDIENTS" />
              <InfiniteTable.Cell content="111-222-3333" key="SERIAL_NUMBER" />
            </InfiniteTable.Row>
          </InfiniteTable.Rows>
          <InfiniteTable.Header key="HEADER_1">
            <InfiniteTable.HeaderCell content="Object" key="OBJECT" minWidth="small" />
            <InfiniteTable.HeaderCell content="Ingredients" key="ADDRESS" minWidth="medium" />
            <InfiniteTable.HeaderCell content="Serial Number" key="OBJECT" minWidth="large" />
          </InfiniteTable.Header>
        </InfiniteTable>
      </div>
    );
  }
}
export default InfiniteTableExample;
