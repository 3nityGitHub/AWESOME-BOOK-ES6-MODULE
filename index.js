import bookSet from './modules/bookSet.js';
import booknav from './modules/bookNav.js';
import dateNow from './modules/timeSetup.js';

const bookset = new bookSet();
bookset.displaylist();
bookset.addbtn();
booknav();
dateNow();
