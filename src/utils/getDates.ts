const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDateText(date: Date) {
  const objDate = date;

  return (
    monthNames[objDate.getMonth()] +
    " " +
    objDate.getUTCDate() +
    ", " +
    objDate.getFullYear()
  );
}
