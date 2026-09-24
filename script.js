addEventListener("DOMContentLoaded", (event) => {
  const zoomLevel = Math.roundwindow.devicePixelRatio;
  const targetZoom = 1 / zoomLevel;
  document.body.style.zoom = `${targetZoom}`;
});
