import React from 'react';
import format from 'date-fns/format';
import DatePicker from '../../../../lib/DatePicker';

class DatePickerDefault extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectedDateUpdate = this.handleSelectedDateUpdate.bind(this);
    this.state = {
      date: format(new Date(), 'yyyy-MM-dd'),
    };
  }

  handleSelectedDateUpdate() {
    this.setState({ date: format(new Date(), 'yyyy-MM-dd') });
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
