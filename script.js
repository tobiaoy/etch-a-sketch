const grid = document.querySelector('#grid-container'); //grid for boxes
const clearButton = document.querySelector('.clear-grid'); //clear button
const changeButton = document.querySelector('#applySquares'); // applies square dial change
const squareDial = document.querySelector('#changeSquares'); // changes number of squares

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

//function to change the number of squares
function changeSquares(e){
    squaresPerSide = e.target.value;
}

//function to apply the change of squares
function applyChange(){
    clearGrid();
}



clearButton.addEventListener('click', clearGrid);
squareDial.addEventListener('input', changeSquares);
changeButton.addEventListener('click', applyChange);
grid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.cell')){
        e.target.classList.add('active');
    }
})

