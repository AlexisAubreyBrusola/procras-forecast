export const toSentenceCase = (str) => {
  return String(str)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
