const FormDate = (date) => {
  const d = new Date(date);
  const fullDate = d.getDate();
  const month = `${d.getMonth() + 1}`;
  const fullYear = d.getFullYear();
  
  const result = [fullDate, month, fullYear].join("-");
  return result;
};
export default FormDate;
