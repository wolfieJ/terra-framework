import moment from 'moment-timezone';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import getYear from 'date-fns/getYear';
import setYear from 'date-fns/setYear';
import getMonth from 'date-fns/getMonth';
import setMonth from 'date-fns/setMonth';
import getDate from 'date-fns/getDate';
import setDate from 'date-fns/setDate';
import getMinutes from 'date-fns/getMinutes';
import setMinutes from 'date-fns/setMinutes';
import getHours from 'date-fns/getHours';
import setHours from 'date-fns/setHours';
import parse from 'date-fns/parse';
import DateUtil from 'terra-date-picker/lib/DateUtil';

class DateTimeUtils {
  // Check if the iSODate contains the time part.
  // The time part in a valid ISO 8601 string is separated from the date part either by a space or 'T'.
  static hasTime(iSODate) {
    if (!DateUtil.createSafeDate(iSODate)) {
      return false;
    }

    let timePart = '';

    if (iSODate.indexOf(' ') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split(' ')[1];
    } else if (iSODate.indexOf('T') > 0) {
      // eslint-disable-next-line prefer-destructuring
      timePart = iSODate.split('T')[1];
    }

    return timePart.length > 0;
  }

  static formatISODateTime(iSODate, dtFormat) {
    if (!iSODate || iSODate.length <= 0) {
      return '';
    }

    return DateTimeUtils.formatDateTime(new Date(iSODate), dtFormat);
  }

  static formatDateTime(date, dtFormat) {
    return date && isValid(date) ? format(date, dtFormat, { awareOfUnicodeTokens: true }) : undefined;
  }

  static syncDateTime(dateObj, iSOdate, time) {
    const date = new Date(iSOdate);
    let newDate = isValid(dateObj) ? dateObj : date;

    // If dateObj was null, a new Date needs to be created and sync'd with the entered time.
    if (dateObj === null && time && time.length === 5) {
      newDate = DateTimeUtils.updateTime(newDate, time);
    }

    newDate = setYear(newDate, getYear(date));
    newDate = setMonth(newDate, getMonth(date));
    newDate = setDate(newDate, getDate(date));

    return newDate;
  }

  static updateTime(dateObj, time) {
    if (!dateObj || !isValid(dateObj)) {
      return null;
    }

    let newDate = dateObj;
    const date = parse(time, 'HH:mm', new Date());

    if (isValid(date)) {
      newDate = setHours(newDate, getHours(date));
      newDate = setMinutes(newDate, getMinutes(date));
    }

    return newDate;
  }

  static isValidDateTime(date, time, dateFormat) {
    return DateTimeUtils.isValidDate(date, dateFormat) && DateTimeUtils.isValidTime(time);
  }

  static isValidDate(date, dateFormat) {
    const parsedDate = parse(date, dateFormat, new Date());
    return isValid(parsedDate) && date === format(parsedDate, dateFormat, { awareOfUnicodeTokens: true });
  }

  static isValidTime(time) {
    const formattedDateTime = parse(time, 'HH:mm', new Date());
    return isValid(formattedDateTime);
  }

  static checkAmbiguousTime(dateTime) {
    if (!dateTime || !isValid(dateTime)) {
      return false;
    }

    const localizedDateTime = moment.tz(dateTime.toISOString(), moment.tz.guess());
    const beforeDaylightSaving = localizedDateTime.clone();
    const afterDaylightSaving = localizedDateTime.clone();

    // The localizedDateTime could be before or after the time change (e.g. the offset is -500 or -600 in CST)
    // To determine if this is the ambiguous hour, we need to add 1 hour as well as subtract 1 hour to account for both directions.
    beforeDaylightSaving.add(1, 'hour');
    afterDaylightSaving.subtract(1, 'hour');

    const isAmbiguousBeforeChange = localizedDateTime.isDST() && !beforeDaylightSaving.isDST();
    const isAmbiguousAfterChange = !localizedDateTime.isDST() && afterDaylightSaving.isDST();

    return isAmbiguousBeforeChange || isAmbiguousAfterChange;
  }

  static isDaylightSavingsTime(dateTimeObj) {
    const localizedDateTime = moment.tz(dateTimeObj.toISOString(), moment.tz.guess());
    return localizedDateTime.isDST();
  }

  static getDaylightSavingTZDisplay() {
    return moment('2017-07-01').tz(moment.tz.guess()).format('z');
  }

  static getStandardTZDisplay() {
    return moment('2017-01-01').tz(moment.tz.guess()).format('z');
  }

  static convertDateTimeStringToDate(date, time, dateformat) {
    return DateTimeUtils.updateTime(DateUtil.createSafeDate(DateUtil.convertToISO8601(date, dateformat)), time);
  }

  static convertDateToPreferredISOString(date) {
    if (isValid(date)) {
      return format(date, "yyyy-MM-dd'T'HH:mm:ssxxx", { awareOfUnicodeTokens: true });
    }

    return '';
  }
}

export default DateTimeUtils;
