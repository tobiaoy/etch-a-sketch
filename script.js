const grid = document.querySelector('#grid-container');
const grid_size = grid.clientHeight;
let cell_count = 16;
let numOfCells = cell_count * cell_count;
let cells = [];

// to create all the cells within the grid
// get the div size and divide by the number of cells
for(let i = 0; i < numOfCells; i++){
    cells[i] = document.createElement('div');
    cells[i].classList.add('cell');
    cells[i].style.height = grid_size / numOfCells;
    cells[i].style.width = grid_size / numOfCells;

    grid.addChild(cells[i]);
}