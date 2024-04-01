var color, height, width;
const pixelCanvas = document.getElementById("pixelCanvas");

document.getElementById("sizePicker").onsubmit = () => {
  event.preventDefault(); //since default value is 1 and 1.
  height = document.getElementById("inputHeight").value;
  width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
};

function makeGrid(x, y) {
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  // Your code goes here!
  for (var i = 1; i <= x; i++) {
    var node = document.createElement("tr");
    pixelCanvas.appendChild(node);

    for (var j = 1; j <= y; j++) {
      var td = document.createElement("td");
      node.appendChild(td);
      td.addEventListener("click", function () {
        color = document.getElementById("colorPicker").value;

        this.style.backgroundColor = color;
      });
    }
  }
}
pixelCanvas.addEventListener("dblclick", (e) => {
  e.target.style.backgroundColor = null;
});
