import React from 'react';
import format from 'date-fns/format';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerOnChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <h3>
Selected Date:
          <span id="selected-date">{this.state.date}</span>
        </h3>
        <DatePicker
          name="date-input-onchange"
          onChange={this.handleDateChange}
          selectedDate={this.state.date}
        />
      </div>
    );
  }
}

export default DatePickerOnChange;
