import bookNav from './Modules/bookNav.js';
import bookSet from './Modules/bookSet.js';
import getTime  from './Modules/timeSetup.js';

document.addEventListener('click', () => {
  bookNav();
  bookSet();
  getTime();
});
