import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const preferredISOFormat = "yyyy-MM-dd'T'HH:mm:ssxxx";

const propTypes = {
  /**
   * The current entered date time. Use for the selected date message.
   */
  value: PropTypes.node,
};

const defaultProps = {
  value: '',
};

class DateTimePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: this.props.value };
    this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
  }

  handleDateTimeChange(event, dateTime) {
    this.setState({ dateTime });
  }

  render() {
    return (
      <div>
        <p>
Selected ISO Date Time:
          {this.state.dateTime}
        </p>
        <Field label="Enter Date/Time" htmlFor="min-max-dates">
          <DateTimePicker
            name="date-time-picker-example"
            dateInputAttributes={{ id: 'min-max-dates' }}
            onChange={this.handleDateTimeChange}
            {...this.props}
          />
        </Field>
      </div>
    );
  }
}

DateTimePickerExample.propTypes = propTypes;
DateTimePickerExample.defualtProps = defaultProps;

const DateTimePickerExampleMinMax = () => (
  <DateTimePickerExample
    minDateTime={format(new Date(), preferredISOFormat, { awareOfUnicodeTokens: true })}
    maxDateTime={format(addDays(new Date(), 6), preferredISOFormat, { awareOfUnicodeTokens: true })}
  />
);

export default DateTimePickerExampleMinMax;
