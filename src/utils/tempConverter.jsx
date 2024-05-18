export const tempConverter = (temp, tempMode) => {
  const fahrenheit = temp * (9 / 5) + 32;
  return Math.round(tempMode ? fahrenheit : temp);
};

export const metersToFeet = (metersPerSecond, tempMode) => {
  return tempMode ? (metersPerSecond * 3.28084).toFixed(2) : metersPerSecond;
};
