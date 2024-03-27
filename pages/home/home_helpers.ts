import {isToday, isYesterday, isThisWeek, isThisMonth} from 'date-fns';

export function getDateRange(timestamp: string): string {
  const expenseDate = new Date(timestamp);

  if (isToday(expenseDate)) {
    return 'Today';
  } else if (isYesterday(expenseDate)) {
    return 'Yesterday';
  } else if (isThisWeek(expenseDate)) {
    return 'Last week';
  } else if (isThisMonth(expenseDate)) {
    return 'Last month';
  } else {
    return 'Older';
  }
}
