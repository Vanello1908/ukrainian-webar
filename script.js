addEventListener("DOMContentLoaded", (event) => {
  const zoomLevel = window.devicePixelRatio;
  const targetZoom = 1 / zoomLevel;
  document.body.style.zoom = `${targetZoom}`;

  const gallry_grid = document.getElementById("gallery").lastElementChild

  for(let i = 0; i < 9; i++) {
    const index = i;
    let el = document.createElement("img")
    el.src = `images/${index+1}.jpg`
    el.height = 256;

    gallry_grid.appendChild(el)
  }
});

