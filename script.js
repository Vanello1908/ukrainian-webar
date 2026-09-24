addEventListener("DOMContentLoaded", (event) => {
  const zoomLevel = Math.round(window.devicePixelRatio);
  const targetZoom = 1 / zoomLevel;
  document.body.style.zoom = `${targetZoom}`;
});
