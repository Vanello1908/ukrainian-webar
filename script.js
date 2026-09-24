addEventListener("DOMContentLoaded", (event) => {
  const zoomLevel = window.devicePixelRatio;
  const targetZoom = 1 / zoomLevel;
  document.body.style.zoom = `${targetZoom}`;
});
