function resize() {
  const zoomLevel = window.devicePixelRatio;
  const targetZoom = 1 / zoomLevel;
  document.body.style.zoom = `${targetZoom}`;
}

function load_gallry() {
  const gallry_grid = document.getElementById("gallery").lastElementChild;

  for (let i = 0; i < 9; i++) {
    const index = i;
    let el = document.createElement("img");
    el.src = `images/${index + 1}.jpg`;
    el.height = 256;

    gallry_grid.appendChild(el);
  }
}

addEventListener("DOMContentLoaded", (event) => {
  resize();
  load_gallry();
});

window.visualViewport.addEventListener("resize", () => {
  resize();
});
