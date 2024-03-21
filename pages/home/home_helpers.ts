export const getCategorizedDate = (date: string) => {
  const parsedDate = new Date(date).getTime();
  const today = new Date().getTime();
  const diffTime = Math.abs(today - parsedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Today';
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays <= 7) {
    return 'Last Week';
  } else if (diffDays <= 30) {
    return 'Last Month';
  } else if (diffDays <= 365) {
    return 'Last Year';
  } else {
    return 'Earlier';
  }
};
