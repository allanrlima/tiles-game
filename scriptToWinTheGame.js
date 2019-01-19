// Copy and paste this script in the console of your browser
let tiles = null;
let color = null;
let colorArray = [];
let firstColor = [];
let secondColor = [];

setInterval(() => {
  tiles = document.getElementById("tiles-wrapper").children;

  for (let item of tiles) {
    color = item.getAttribute("color");
    colorArray.push(color);
    if (firstColor.length === 0) {
      firstColor.push(color);
    } else if (color === firstColor[0]) {
      firstColor.push(color);
    } else {
      secondColor.push(color);
    }
  }

  for (let item of tiles) {
    color = item.getAttribute("color");
    if (color === firstColor[0] && firstColor.length === 1) {
      item.click();
    } else if (color === secondColor[0] && secondColor.length === 1) {
      item.click();
    }
  }

  firstColor = [];
  secondColor = [];
  tiles = null;
  color = "";
  colorArray = [];
}, 1000);
