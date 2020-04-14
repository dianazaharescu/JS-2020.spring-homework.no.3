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
            grid[row][column] = new Cell(row, column, row % 2 ? 'red' : 'blue');
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

createGrid();
drawGrid();

// Exercitiul 5
// Folosind codul existent de la curs (https://github.com/rysk23/tetris), creati o forma Square cu proprietarile: row, column si metoda draw.

// Scenariu de folosire:

// in momentul instantieri unei noi forme const square = new Square(2,3); square.draw();. In gridul creat o sa avem un patrat desenat care incepe de la randul 2, coloana 3.
// pentru o alta instanta const square2 = new Square(5,7); square.draw();. . In gridul creat o sa avem un patrat desenat care incepe de la randul 5, coloana 7.

class Square {
    constructor(row, column) {
        this.row = row - 1;
        this.column = column - 1;
    }

    draw() {
        context.beginPath();
        context.fillStyle = 'yellow';
        context.rect(this.column * 30, this.row * 30, 50, 50);
        context.fill();
        context.stroke();
        context.closePath();
    }
}

const square = new Square(2, 3);
square.draw();

const square2 = new Square(5,7);
square2.draw();