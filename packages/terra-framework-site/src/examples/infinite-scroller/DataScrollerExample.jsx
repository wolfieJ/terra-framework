import React from 'react';
import DataScroller from 'terra-infinite-scroller/lib/DataScroller';
import List from 'terra-list';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';

import ItemView from 'terra-clinical-item-view';

// const colors = ['#1598f0', '#f03c15', '#6ff015', '#f015de', '#d4f015'];

class scrollerExample extends React.Component {
  constructor(props) {
    super(props);

    this.addMoreData = this.debounce(this.addMoreData.bind(this), 1000);

    this.state = { stillLoading: true, numberOfPages: 0 };
  }

  addMoreData() {
    const newNumberOfPages = this.state.numberOfPages + 1;
    if (newNumberOfPages > 4) {
      return;
    } else if (newNumberOfPages > 3) {
      this.setState({ stillLoading: false, numberOfPages: newNumberOfPages });
    }
    this.setState({ numberOfPages: newNumberOfPages });
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
    const display1 = <ItemView.Display icon={<IconPerson />} text="Asif Khan" />;
    const display2 = <ItemView.Display text="Care Position: Primary" />;
    const display3 = <ItemView.Display text="Room 100A" />;
    const display4 = <ItemView.Display text="Acuity: 5" />;
    const display5 = <ItemView.Display text="Start Time: 08-05-2016 12:00:00" />;
    const display6 = <ItemView.Display text="End Time: 08-05-2016 16:00:00" />;
    const displays = [display1, display2, display3, display4, display5, display6];
    const comment = <ItemView.Comment text="Faint red rash appeared at 08-05-2016 13:24:00" />;
    const accessoryStart = <IconAlert />;
    const accessoryEnd = <IconInformation />;

    const items = [];
    for (let i = 0; i < 15 * this.state.numberOfPages; i += 1) {
      items.push(
        <ItemView
          key={`${i}`}
          displays={displays}
          layout="twoColumns"
          isTruncated
          textEmphasis="start"
          startAccessory={accessoryStart}
          endAccessory={accessoryEnd}
          comment={comment}
          style={{ backgroundColor: 'white', marginTop: '10px', marginBottom: '10px' }}
        />,
      );
    }


    return (
      <div style={{ height: '600px', width: '100%', position: 'relative', border: '1px solid black' }}>
        <DataScroller isFinishedLoading={!this.state.stillLoading} onRequestItems={this.addMoreData}>
          {items}
        </DataScroller>
      </div>
    );
  }
}
export default scrollerExample;
