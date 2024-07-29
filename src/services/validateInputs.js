export const dataCannotBeEmpty = (tempData) => {
  const newErrors = {};
  for (const [field, value] of Object.entries(tempData)) {
    if (value.trim() === "") {
      newErrors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } cannot be empty`;
    }
  }
  return newErrors;
};
