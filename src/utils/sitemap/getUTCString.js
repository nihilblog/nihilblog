/**
 * @param {number} date
 */
const getUTCString = (date) => {
  const Default = new Date(date);
  const UTC = Default.getTime() + (Default.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const UTCTime = new Date(UTC + KR_TIME_DIFF);

  const YYYY = UTCTime.getFullYear();

  let MM = UTCTime.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD = UTCTime.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  let HH = UTCTime.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;

  let mm = UTCTime.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;

  let ss = UTCTime.getSeconds();
  ss = ss >= 10 ? ss : `0${ss}`;

  return (
    `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}+09:00`
  );
};

module.exports = getUTCString;
