const grid = document.querySelector('#grid-container'); //grid for boxes
const clearButton = document.querySelector('.clear-grid'); //clear button
const squareDial = document.querySelector('#changeSquares'); // changes number of squares
let dimensionCheck = document.querySelector('.square_set');// to be able to see the dimensions of the grid

let squaresPerSide = 16;
let cells = [];


function createGrid(squaresPerSide){
    let numOfCells = squaresPerSide ** 2;
    let cellSize = grid.clientWidth / squaresPerSide;
    
    for(let i = 0; i < numOfCells; i++){
        cells[i] = document.createElement('div');
        cells[i].classList.add('cell');
        cells[i].style.width = cellSize + 'px';
        cells[i].style.height = cellSize + 'px';
        grid.appendChild(cells[i]);
    }
}

if (squaresPerSide !== 0){
    createGrid(squaresPerSide);
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


clearButton.addEventListener('click', clearGrid);
squareDial.addEventListener('input', changeSquares);
squareDial.addEventListener('mouseup', clearGrid);
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.cell')){
        e.target.classList.add('active');
    }
})

