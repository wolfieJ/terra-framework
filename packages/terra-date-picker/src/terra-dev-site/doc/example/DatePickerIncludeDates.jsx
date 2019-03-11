import React from 'react';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePicker from 'terra-date-picker/lib/DatePicker';

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
        <Field label="Enter Date" htmlFor="include-dates">
          <DatePicker
            name="date-input"
            id="include-dates"
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

const DatePickerExampleIncludeDates = () => (
  <DatePickerExample
    includeDates={[format(new Date(), 'yyyy-MM-dd'), format(addDays(new Date(), 1), 'yyyy-MM-dd'), format(addDays(new Date(), -1), 'yyyy-MM-dd')]}
  />
);


export default DatePickerExampleIncludeDates;
