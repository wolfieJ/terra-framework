import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedDateUpdate = this.handleSelectedDateUpdate.bind(this);
    this.state = {
      date: (new Date()).toISOString(),
    };
  }

  handleSelectedDateUpdate() {
    this.setState({ date: (new Date()).toISOString() });
  }

  render() {
    return (
      <div>
        <DatePicker
          name="date-input"
          selectedDate={this.state.date}
        />
        <button type="button" onClick={this.handleSelectedDateUpdate}>Update selected date</button>
      </div>
    );
  }
}

export default DatePickerDefault;
