import { DateTime } from './luxon.js';

export const getTime = () => {
  const date = document.querySelector('#date');
  if (!date.innerText) {
    setInterval(() => {
      date.innerText = DateTime.now().toLocaleString(
        DateTime.DATETIME_MED_WITH_SECONDS,
      );
    }, 1000);
  }
};

export default getTime;
