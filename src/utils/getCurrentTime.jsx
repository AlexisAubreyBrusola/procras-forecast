export const getCurrentTime = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )} ${meridiem}`;
};
