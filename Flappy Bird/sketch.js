let gravity = 0.15;

class Bird {
  constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.vel = 0;
  }

  update() {
      this.vel += gravity;
      this.y += this.vel;


  }

  draw() {
      fill(255, 0, 0);
      circle(this.x, this.y, this.r);
  }
}

let bird;

function setup() {
    createCanvas(800, 600);

    bird = new Bird(100, height / 2, 50);
}

function draw() {
    background(220);
    bird.update();
    bird.draw();
}

function mousePressed() {
    if (bird.vel > 0) {
        bird.vel = -5;
    } else {
        bird.vel -= 2;
    }
}