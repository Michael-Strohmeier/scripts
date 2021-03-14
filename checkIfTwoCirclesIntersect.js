function setup() {
  createCanvas(400, 400);
  circle1 = new Circle(200, 200, 200);
  circle2 = new Circle(200, 200, 50);
} 

function draw() {
  background(220);
  circle2.updateCoordinates(mouseX, mouseY);
  circle2.touching(circle1.x, circle1.y, circle1.r);

  circle1.draw();
  circle2.draw();
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r / 2;
    
    this.c = color(0);
  }
  
  updateCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }
  
  touching(x2, y2, r2) {
    let dist = pow(this.x - x2, 2) + pow(this.y - y2, 2);
    let rad = pow(this.r + r2, 2);

    if (dist > rad) {
      this.c = color(0);
      return false;
    } else {
      this.c = color(255, 170, 200);
      return true;
    }
  }
  
  draw() {
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }
}
