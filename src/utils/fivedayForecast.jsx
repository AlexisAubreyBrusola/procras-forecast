// utility.js

export const getDateFromTimestamp = (timestamp) => {
  // Handle potential invalid timestamps gracefully (e.g., return null)
  if (isNaN(timestamp)) {
    return null;
  }
  return new Date(timestamp * 1000);
};

export const getDayOfTheWeek = (date) => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Ensure date is a valid Date object (e.g., throw an error)
  if (!(date instanceof Date)) {
    throw new Error("getDayOfTheWeek: Invalid date argument");
  }
  return daysOfTheWeek[date.getDay()];
};

export const getMonthAndDate = (date) => {
  // Ensure date is a valid Date object (e.g., throw an error)
  if (!(date instanceof Date)) {
    throw new Error("getMonthAndDate: Invalid date argument");
  }
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}`;
};

export const getDailyData = (data) => {
  if (!data || !data.list) {
    throw new Error("getDailyData: Invalid data argument");
  }
  const dailyData = {};
  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!dailyData[date]) {
      dailyData[date] = [entry];
    } else {
      dailyData[date].push(entry);
    }
  });

  const dailyForecast = Object.keys(dailyData).map((date) => {
    const dailyDataPoints = dailyData[date];
    return dailyDataPoints.find((dataPoint) => {
      const dataPointTime = new Date(dataPoint.dt_txt).getTime();
      const currentTime = new Date().getTime();
      return dataPointTime > currentTime; // Only consider future data points
    });
  });

  return dailyForecast.filter(Boolean); // Remove any null values
};
