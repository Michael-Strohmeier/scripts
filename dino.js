function setup() {
  createCanvas(400, 400);
  frameRate(30);
  
  dinosaur = new Dinosaur();
}

function mousePressed() {
  // body.click(mouseX, mouseY);
}



function draw() {
  background(235);
  dinosaur.draw();
}

class Dinosaur {
  constructor() {
    this.x = -100;
    this.y = 100;
    this.rotate = sin(this.x / 28);
  }
  
  draw() {
    noStroke();
    translate(230, 130);
    fill(255);
    rectMode(CENTER);
    
    // head
    rect(0, 0, 105, 55, 15);
    rect(0, 19, 105, 20, 0);
    rect(-25, 44, 55, 30, 0);
    rect(10, 54, 47, 10, 0);
    
    // body
    triangle(-110, 100, -52, 100, -52, 58);
    rect(-75, 135, 70, 70, 0);
    rect(-30, 94, 45, 70, 0);
    triangle(-40, 128, -40, 170, -7, 128);
    
    // legs
    fill(0);
    triangle(-110, 150, -52, 150, -52, 58);


  }
}



