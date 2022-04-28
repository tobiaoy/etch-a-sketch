const grid = document.querySelector('#grid-container');
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

function setSquares(num){
    let num = prompt('How many squares a side would you like?')
    const max = 100;

    if (num > 100){
        return;
    }

    squaresPerSide = num;
}


