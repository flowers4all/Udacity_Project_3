// Select color input
let color = document.getElementById('colorPicker')
// create function makeGrid
function makeGrid(msgHeight, msgWidth) {
// Your code goes here!
let grid = document.getElementById('pixelCanvas');
while (grid.firstChild) {
  grid.removeChild(grid.firstChild);
  }
for (let i = 1; i <= msgHeight; i ++){
  let row = grid.appendChild(document.createElement('tr'));
  for (let c = 1; c <= msgWidth; c++) {
    let column = row.appendChild(document.createElement('td'));
// Add color to square
		column.addEventListener('click', function (square) {
    square.target.style.backgroundColor = color.value;
    }
  )}
 }
}


//Select size input added to the "submit button" code
document.getElementById("sizePicker").addEventListener('submit',functSubmit);
function functSubmit(event) {
  let msgHeight  = document.getElementById("inputHeight").value;
  let msgWidth  = document.getElementById("inputWidth").value;

  makeGrid(msgHeight, msgWidth);
  event.preventDefault();
/* for test purposes used alert */
/*   alert(msgHeight + " and " + msgWidth); */
}
