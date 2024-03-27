import {
  startOfToday,
  startOfYesterday,
  startOfWeek,
  startOfMonth,
  isAfter,
  isBefore,
} from 'date-fns';

export function getDateRange(timestamp: string) {
  const currentDate = new Date();
  const givenDate = timestamp;

  if (isAfter(givenDate, currentDate)) {
    return 'In future';
  } else if (isBefore(givenDate, startOfToday())) {
    if (isBefore(givenDate, startOfYesterday())) {
      if (isBefore(givenDate, startOfWeek(currentDate))) {
        if (isBefore(givenDate, startOfMonth(currentDate))) {
          return 'Older';
        } else {
          return 'Current Month';
        }
      } else {
        return 'Current Week';
      }
    } else {
      return 'Yesterday';
    }
  } else {
    return 'Today';
  }
}

export function displayDataByRange(timestamp: string, data: any[]) {
  const currentDate = new Date();
  const givenDate = timestamp;
  let range = '';

  if (isAfter(givenDate, currentDate)) {
    range = 'In future';
  } else if (isBefore(givenDate, startOfToday())) {
    if (isBefore(givenDate, startOfYesterday())) {
      if (isBefore(givenDate, startOfWeek(currentDate))) {
        if (isBefore(givenDate, startOfMonth(currentDate))) {
          range = 'Older';
        } else {
          range = 'Current Month';
        }
      } else {
        range = 'Current Week';
      }
    } else {
      range = 'Yesterday';
    }
  } else {
    range = 'Today';
  }

  const filteredData = data.filter((item) => {
    const itemDate = item.dateTime;
    return getDateRange(itemDate) === range;
  });

  return {range, data: filteredData};
}
