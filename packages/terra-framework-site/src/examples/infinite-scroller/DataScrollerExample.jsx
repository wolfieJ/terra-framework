import React from 'react';
import DataScroller from 'terra-infinite-scroller/lib/DataScroller';

const colors = ['#1598f0', '#f03c15', '#6ff015', '#f015de', '#d4f015'];

class scrollerExample extends React.Component {
  constructor(props) {
    super(props);

    this.addMoreData = this.debounce(this.addMoreData.bind(this), 1000);

    this.state = { stillLoading: true, numberOfPages: -1 };
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
    const rows = [];
    for (let i = 0; i <= this.state.numberOfPages; i += 1) {
      rows.push(<div style={{ height: '800px', width: '100%', backgroundColor: colors[i] }} />);
    }

    return (
      <div style={{ height: '600px', width: '100%', position: 'relative', border: '1px solid black' }}>
        <DataScroller isFinishedLoading={!this.state.stillLoading} onRequestItems={this.addMoreData}>
          {rows}
        </DataScroller>
      </div>
    );
  }
}
export default scrollerExample;
