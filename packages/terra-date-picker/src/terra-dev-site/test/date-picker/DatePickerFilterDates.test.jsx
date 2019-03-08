import React from 'react';
import DatePicker from '../../../../src/DatePicker';

const isWeekday = (date) => {
  debugger;
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

const DatePickerFilterDates = () => (
  <DatePicker
    name="date-input"
    // filterDate={isWeekday}
  />
);

export default DatePickerFilterDates;
