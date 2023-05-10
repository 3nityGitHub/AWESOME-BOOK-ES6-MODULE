import Bookset from './modules/bookset.js';
import booknav from './modules/booknav.js';
import dateNow from './modules/timesetup.js';

const bookset = new Bookset();
bookset.displaylist();
bookset.addbtn();
booknav();
dateNow();
