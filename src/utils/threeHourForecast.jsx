// To get current local timestamp
export const getLocalTimestamp = () => {
  // Timezone offset
  const timeZoneOffset = 8;

  const options = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour12: false,
  };
  const date = new Date().toLocaleString("en-US", options);
  const dateToTimestamp = new Date(date).getTime();
  const convertedTimestamp = new Date(dateToTimestamp);

  const finalTimestamp = convertedTimestamp.setHours(
    convertedTimestamp.getHours() + timeZoneOffset
  );

  return finalTimestamp;
};

export const getNearestTimestamps = (data, timestamp) => {
  const filteredData = data?.filter((item) => item.dt > timestamp);
  return filteredData?.slice(0, 3);
};

export const convertTo12HourFormat = (timeString) => {
  // Split the time string by colon to get hours and minutes
  const [hours, minutes] = timeString.split(":").map(Number);

  // Create a Date object with arbitrary date and 24-hour time
  const date = new Date(2000, 0, 1, hours, minutes);

  // Get hours in 12-hour format
  let hours12 = date.getHours() % 12;
  hours12 = hours12 === 0 ? 12 : hours12; // Convert 0 to 12 for 12-hour format

  // Get AM or PM indicator
  const period = date.getHours() < 12 ? "AM" : "PM";

  // Format hours and minutes with AM or PM
  const formattedTime = `${hours12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${period}`;

  return formattedTime;
};
