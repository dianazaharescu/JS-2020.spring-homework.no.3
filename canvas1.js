// Exercitiul 1
// Desenati o forma geometrica, folosind canvas. Umpleti forma geometrica cu o culoare la alegere.

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.getElementById('playground').append(canvas);
const context = canvas.getContext('2d');
context.beginPath();
context.fillStyle = 'orange';
context.fillRect(120, 75, 150, 100);
context.fillStyle = 'black';
context.font = '15px Arial';
context.fillText('Exercitiul 1', 132, 95);
context.stroke();

// Exercitiul 2
// Create o metoda draw, care sa deseneze una din formele create la tema din saptamana precedenta (EX 5).

class Shape {
    constructor(color, sides) {
        this.color = color;
        this.sides = sides;
    }
    metodaPerimetru() {
        let perimetru = 0;
        for (i = 0; i < this.laturi.length; i++) {
            perimetru = perimetru + this.laturi[i];
        }
        return perimetru;
    }

    metodaSemiperimetru() {
        let semiperimetru = this.metodaPerimetru() / 2;
        return semiperimetru;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color, [side, side, side, side]);
        this.side = side;
    }

    area() {
        return side ** 2;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(10, 10, this.side, this.side);
        context.fillStyle = 'black';
        context.font = '15px Arial';
        context.fillText('Exercitiul 2', 15, 30);
        context.closePath();
    }
}

const redSquare = new Square('red', 100);
redSquare.draw();