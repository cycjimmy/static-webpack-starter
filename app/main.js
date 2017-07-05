// global css
import './theme/main.scss';

import webInitialize from './webInitialize.afunc';

if (DEVELOPMENT) {
  console.log('Development Mode');
}
if (PRODUCTION) {
  console.log('Production Mode');
}

// web page init
document.addEventListener('DOMContentLoaded', () => {
  // web init
  // webInitialize();
}, false);