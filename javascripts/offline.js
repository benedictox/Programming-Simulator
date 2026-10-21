(() => {
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(window.location.protocol)) return;

  const workerUrl = new URL('../service-worker.js', document.currentScript.src);
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(workerUrl.href).catch(error => {
      console.warn('Offline support could not be started:', error);
    });
  }, { once: true });
})();
