function resizeAllMasonryGrids() {
  const containers = document.querySelectorAll(".ui-ux-image-container");

  containers.forEach((grid) => {
    const rowHeight = parseInt(
      getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const gap = parseInt(getComputedStyle(grid).getPropertyValue("gap"));

    grid.querySelectorAll("img").forEach((item) => {
      const rowSpan = Math.ceil(
        (item.getBoundingClientRect().height + gap) / (rowHeight + gap)
      );
      item.style.gridRowEnd = `span ${rowSpan}`;
    });
  });
}

window.addEventListener("load", resizeAllMasonryGrids);
window.addEventListener("resize", resizeAllMasonryGrids);

document.querySelectorAll(".ui-ux-image-container img").forEach((img) => {
  img.addEventListener("load", resizeAllMasonryGrids);
});
