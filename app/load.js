// global css
import './theme/main.scss';

// polyfill
import './polyfill';

if (!DEVELOPMENT) {
  // Registering Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}

if (DEVELOPMENT) {
  console.log('Development Mode');
  import('@cycjimmy/awesome-js-funcs/esm/handheld')
    .then((handheld) => {
      console.log(handheld.getBrowserInfo());
    });
}

if (PRODUCTION) {
  console.log('Production Mode');
}
