const getUTC9 = (date) => {
  const Default = new Date(date);
  const UTC = Default.getTime() + (Default.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const UTC9Time = new Date(UTC + KR_TIME_DIFF);

  let YYYY = UTC9Time.getFullYear();

  let MM = UTC9Time.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD = UTC9Time.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  let HH = UTC9Time.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;

  let mm = UTC9Time.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;

  return (
    `${YYYY}-${MM}-${DD} ${HH}:${mm}`
  );
};

module.exports = getUTC9;