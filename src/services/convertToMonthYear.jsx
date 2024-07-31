export const convertToMonthYear = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("en-US", options);
};
