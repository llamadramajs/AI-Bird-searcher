const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      )
);
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
            const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }}}

function checkValidServiceWorker(swUrl, config) {
  // Checks if such a bird exists in the database
  fetch(swUrl)
    .then(response => {
    
            navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
