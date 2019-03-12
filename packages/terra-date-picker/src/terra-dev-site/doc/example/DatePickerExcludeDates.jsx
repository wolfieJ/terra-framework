import React from 'react';
import addDays from 'date-fns/addDays';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePicker from 'terra-date-picker/src/DatePicker';

const propTypes = {
  /**
   * The current DatePicker date if selected. Use for the selected date message.
   */
  selectedDate: PropTypes.node,
};

const defaultProps = {
  selectedDate: '',
};

class DatePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.selectedDate };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event, date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date:
          <span style={{ display: 'inline-block' }}>{this.state.date}</span>
        </p>
        <Field label="Enter Date" htmlFor="exclude-dates">
          <DatePicker
            name="date-input"
            id="exclude-dates"
            onChange={this.handleDateChange}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DatePickerExample.propTypes = propTypes;
DatePickerExample.defualtProps = defaultProps;

const DatePickerExampleExcludeDates = () => (
  <DatePickerExample
    excludeDates={[((addDays(new Date(), 1)).toISOString()), ((addDays(new Date(), -1)).toISOString())]}
  />
);

export default DatePickerExampleExcludeDates;
