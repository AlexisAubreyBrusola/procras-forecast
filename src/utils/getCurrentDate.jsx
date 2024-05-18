export const getCurrentDate = () => {
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

  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return { year, month, day };
};
