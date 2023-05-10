import Bookset from './module/bookset.js';
import booknav from './module/booknav.js';
import showTime from './module/timestamp.js';

const bookset = new Bookset();
bookset.displaylist();
bookset.addbtn();
booknav();
showTime();
