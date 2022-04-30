//Choose DOM nodes
const grid = document.querySelector('#grid_container'); //grid for boxes
const clearButton = document.querySelector('.clear-grid'); //clear button
const squareDial = document.querySelector('#changeSquares'); // changes number of squares
let dimensionCheck = document.querySelector('.square_set');// to be able to see the dimensions of the grid
let colorPicker = document.querySelector('#favColor'); //color picker 
    let currColor = 'blue'; //sets default color to blue
let squaresPerSide = 16;
let cells = [];

//function to create the grid
function createGrid(squaresPerSide){
    grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
    let cells = [];
    
    for (let i = 0; i < squaresPerSide ** 2; i++){
      cells[i] = document.createElement('div');
      cells[i].classList.add('cell');
      
      grid.appendChild(cells[i]);
      }
    }
    



//function to clear grid
function clearGrid() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    createGrid(squaresPerSide);
  }

//text to be able to see the changed dimensions
dimensionCheck.textContent = `${squaresPerSide} x ${squaresPerSide}`;

//function to change the number of squares
function changeSquares(e){
    squaresPerSide = e.target.value;
    dimensionCheck.textContent = `${squaresPerSide} x ${squaresPerSide}`;
}


//Adding Event Listeners to nodes
clearButton.addEventListener('click', clearGrid);
squareDial.addEventListener('input', changeSquares);
squareDial.addEventListener('mouseup', clearGrid);
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.cell')){
        e.target.style.backgroundColor = `${currColor}`;
    }
});

colorPicker.addEventListener('input', function(e){
    currColor = e.target.value;
})
window.addEventListener('onload', createGrid(squaresPerSide))
