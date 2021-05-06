const getDate = (date) => {
  const curr = new Date(date);
  // const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const dateTime = new Date(curr - KR_TIME_DIFF);

  let YYYY = dateTime.getFullYear();

  let MM = dateTime.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD = dateTime.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  let HH = dateTime.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;

  let mm = dateTime.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;

  return (
    `${YYYY}-${MM}-${DD} ${HH}:${mm}`
  );
};

export default getDate;