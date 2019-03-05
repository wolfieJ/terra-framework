import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Select from 'terra-form-select/lib/Select';

class SelectExample extends React.Component {
  static getRandomOptions() {
    const options = [];

    for (let index = 0; index < 10; index += 1) {
      const randomNumber = (Math.random() * 1000).toString();
      options.push(<Select.Option value={randomNumber} key={randomNumber} display={randomNumber} />);
    }

    return options;
  }

  constructor() {
    super();

    this.state = {
      value: '',
      options: SelectExample.getRandomOptions(),
    };

    this.ajaxCall = this.ajaxCall.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  ajaxCall() {
    const options = SelectExample.getRandomOptions();
    this.setState({ options, noResultContent: undefined });
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleSearch() {
    // this.ajax = setTimeout(this.ajaxCall, 1000);
    this.setState({ options: SelectExample.getRandomOptions()});
  }

  render() {
    return (
      <Select
        variant="search"
        value={this.state.value}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        optionFilter={() => true}
        noResultContent={this.state.noResultContent}
      >
        {this.state.options}
      </Select>
    );
  }
}

export default SelectExample;
