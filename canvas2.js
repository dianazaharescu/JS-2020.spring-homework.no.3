// Exercitiul 3
// Desenati un cerc. Animati cercul dupa urmatoarele reguli:

// incepeti deplasarea cercul de la stanga la dreapta, schimbati pozitia acestuia la fiecare 0.5 secunde.
// la deplaserea spre dreapta setati o culoare, iar la fiecare pas mariti diametrul.
// cand cercul loveste marginea din dreapta a canvas-ului, schimbati directia de deplasare spre stanga.
// la deplaserea spre stanga setati o alta culoare, iar la fiecare pas micsorati diametrul.
// cand cercul loveste marginea din stanga a canvas-ului, schimbati directia de deplasare spre dreapta.

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.getElementById('playground').append(canvas);
const context = canvas.getContext('2d');

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = 1;
        this.dy = 1;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        if (this.dx > 0) {
            context.fillStyle = 'blue';
        }
        else {
            context.fillStyle = 'orange';
        }
        context.fill();
        context.closePath();
    }

    move(stepX, stepY) {
        this.changeDirectionIfExceededBounds();
        this.x += stepX * this.dx;
        this.y += stepY * this.dy;
        this.radius += 1 * this.dx;
        this.draw();
    }

    changeDirectionIfExceededBounds() {
        if (this.x >= canvas.width - this.radius) {
            this.dx = -1;
        }
        if (this.y >= canvas.height - this.radius) {
            this.dy = -1;
        }
        if (this.x <= this.radius) {
            this.dx = 1;
        }
        if (this.y <= this.radius) {
            this.dy = 1;
        }
    }
}

var circle = new Circle(100, 100, 20);
circle.draw();

function animateCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.move(10, 10);
}

setInterval(animateCircle, 50)


