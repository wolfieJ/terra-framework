import React from 'react';
import addDays from 'date-fns/addDays';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    minDateTime={(new Date()).toISOString()}
    maxDateTime={((addDays(new Date(), 6)).toISOString())}
  />
);

export default DateTimePickerExample;
