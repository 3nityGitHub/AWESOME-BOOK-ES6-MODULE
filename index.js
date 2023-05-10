import Bookset from './modules/bookset.js';
import booknav from './modules/booknav.js';
import showTime from './modules/timestamp.js';

const bookset = new Bookset();
bookset.displaylist();
bookset.addbtn();
booknav();
showTime();
