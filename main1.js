// Exercitiul 4
// Folosind codul existent de la curs (https://github.com/rysk23/tetris), colorati grid-ul astfel in cat sa optineti o tabla de sah.

class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * 30, this.x * 30, 30, 30);
        context.fill();
        context.stroke();
        context.closePath();
    }
}

const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

const rows = 20;
const columns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            if ((row%2 == 0) && (column%2 ==0)) {
            grid[row][column] = new Cell(row, column, 'black');
            }
            else 
            if ((row%2 == 1) && (column%2 ==0)){ 
                grid[row][column] = new Cell(row, column, 'white'); 
            }
            else
            if ((row%2 == 0) && (column%2 ==1)) {
                grid[row][column] = new Cell(row, column, 'white');   
            }
            else 
            {
                grid[row][column] = new Cell(row, column, 'black'); 
            }
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();


