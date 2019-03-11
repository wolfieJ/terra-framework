/* eslint-disable no-underscore-dangle */
import isValid from 'date-fns/isValid';
import isEqual from 'date-fns/isEqual';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';

class DateUtil {
  // Converts an ISO 8601 date into a Date object. If the date passed in is invalid and unable to convert, undefined is returned.
  static createSafeDate(date) {
    if (date === undefined) {
      return undefined;
    }

    const newDate = parseISO(date);
    return isValid(newDate) ? newDate : undefined;
  }

  // Filters out any invalid dates in the provided list of dates and returns a list of Date objects representation of the valid dates
  static filterInvalidDates(dates) {
    const validDates = [];

    if (dates) {
      let index = 0;
      for (index = 0; index < dates.length; index += 1) {
        const date = parseISO(dates[index]);
        if (isValid(date)) {
          validDates.push(date);
        }
      }
    }

    return validDates.length > 0 ? validDates : dates;
  }

  // Checks if a given date is out of the range between the start and end dates.
  static isDateOutOfRange(sourceDate, startDate, endDate) {
    if (!sourceDate || !isValid(sourceDate)
      || !startDate || !isValid(startDate)
      || !endDate || !isValid(endDate)) {
      return false;
    }

    if ((isEqual(sourceDate, startDate) || isAfter(sourceDate, startDate)) && (isEqual(sourceDate, endDate) || isBefore(sourceDate, endDate))) {
      return false;
    }

    return true;
  }

  // Checks if a given date is one of the excluded dates.
  static isDateExcluded(sourceDate, excludedDates) {
    if (!sourceDate || !isValid(sourceDate)) {
      return false;
    }

    const validExcludedDates = DateUtil.filterInvalidDates(excludedDates);

    if (validExcludedDates) {
      for (let index = 0; index < validExcludedDates.length; index += 1) {
        if (isSameDay(sourceDate, validExcludedDates[index])) {
          return true;
        }
      }
    }

    return false;
  }

  // Converts date string to the ISO8601 format with only the date part. If the date string is invalid and unable to convert, the originally provided string is returned.
  static convertToISO8601(date, dateFormat) {
    if (date && dateFormat) {
      const parsedDate = parse(date, dateFormat, new Date());

      if (!isValid(parsedDate)) {
        return date;
      }

      // Check strict parsing since the parse method would return a valid date even if date does not match the format.
      // (i.e. "03/15/201" is still considered a valid date)
      if (date === format(parsedDate, dateFormat)) {
        return format(parsedDate, 'yyyy-MM-dd');
      }
    }

    return date;
  }

  // Gets the long date format based on the locale.
  static getFormatByLocale(localeData) {
    if (!localeData) {
      return undefined;
    }

    // Returns the short date format defined in the locale file.
    // See https://github.com/date-fns/date-fns/blob/master/src/locale/en-US/_lib/formatLong/index.js#L25-L28
    return localeData.formatLong.date({ width: 'short' });
  }
}

export default DateUtil;
