export const timestamp = date => {
  const koDate = new Date(date.setHours(date.getHours() + 9));
  // console.log(date, koDate);
  return koDate.toISOString().replace('T', ' ').substring(0, 19);
};
