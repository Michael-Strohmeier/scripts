let X = 0;
let Y = 50;
let Z = 20;
let centerX = 0;
let centerY = 0;
let centerZ = 0;

let s = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  let s = 0;
  
  player = new Player(0, 0, 0);
  
  block = new Block(0, 0, -10);
  block2 = new Block(20, 0, -10);
  block3 = new Block(40, 0, -10);

}

function keyPressed() {
  if (keyCode == 32) {
    print("space bar")
    player.z += 10;
  }
}

function draw() {
  background(60);
  
  s += 0.25;
  
  if (s > 40) {
    s = 0;
  }
  
  //player.y = s;
  block.x = -s - 20;
  block2.x = -s + 20;
  block3.x = -s + 60;
  //centerY = s;

  
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  
  player.update();
  lights(3);
  player.draw();
  block.draw();
  block2.draw();
  block3.draw();
}

class Player {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  update() {
    if (this.z > 0) {
      this.z -= 0.25;
    }
  }
  
  draw() {
    push();
    translate(this.x, this.y, this.z);
    strokeWeight(0.25);
    fill(55, 200, 255);
    box(10, 10, 10, 0, 0);
    pop();
  }
}

class Block {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  update() {
    //this.y += 0.1;
  }
  
  draw() {
    push();
    
    translate(this.x, this.y, this.z);
    strokeWeight(0.25);
    fill(255, 102, 94);
    box(40, 20, 10, 0, 0);
    pop();
  }
}