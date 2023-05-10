import { DateTime } from './luxon.js';

const getTime = () => {
  const displayDate = document.querySelector('#date');
  const displayNow = DateTime.now();
  const nowFormat = displayNow.toLocaleString(DateTime.DATETIME_FULL);
  displayDate.innerHTML = `<small>${nowFormat}</small>`;
};
export default getTime;