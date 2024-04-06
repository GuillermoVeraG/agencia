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

export function getDateText(date: string) {
  const objDate = new Date(date);

  return (
    monthNames[objDate.getMonth()] +
    " " +
    objDate.getUTCDate() +
    ", " +
    objDate.getFullYear()
  );
}
