let X = 0;
let Y = 40;
let Z = 30;
let centerX = 0;
let centerY = 0;
let centerZ = 0;

let s = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  perspective(PI / 3.0, width / height, 0.1, 500);
  
  let s = 0;
  
  player = new Player(-5, -5, 0);
  
  block = new Block(0, 0, 0);

}

function keyPressed() {
  if (keyCode == 32) {
    print("space bar")
    player.z += 10;
  }
  
  
  if (keyCode == 87) {
    player.move(0, 10);
    
  }
  
  if (keyCode == 83) {
    player.move(0, -10);
    //player.y = lerp(player.y, player.y - 10, 0.5);

  }
  
  if (keyCode == 65) {
    player.move(10, 0);
  }
  
  if (keyCode == 68) {
    player.move(-10, 0);
  }
  
  //block.playerY = player.y;

}


function draw() {
  background(60);
  s += 0.25;
  
  if (s > 40) {
    s = 0;
  }
  
  if (keyIsDown(87)) {
    player.move(0, 10);
  }
  
  if (keyIsDown(83)) {
    player.move(0, -10);
    //player.y = lerp(player.y, player.y - 10, 0.5);

  }
  
  if (keyIsDown(65)) {
    player.move(10, 0);
  }
  
  if (keyIsDown(68)) {
    player.move(-10, 0);
  }
  
  //player.y = s;
  //block.x = -s;

  //centerY = s;

  
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  
  player.update();
  lights(0.1);
  player.draw();
  translate(player.x, player.y, -player.height/2 -block.height/2);
  block.draw();

}

class Player {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.newX = x;
    this.newY = y;
    this.newZ = z;
    
    this.height = 14;
  }
  
  update() {
    let speed = 0.5;
    if (this.x - this.newX != 0) {
      if (this.x > this.newX) {
        this.x -= speed;
      } else {
        this.x += speed;
      }
    }
    
    if (this.y - this.newY != 0) {
      if (this.y > this.newY) {
        this.y -= speed;
      } else {
        this.y += speed;
      }
    }
  }
  
  move(dx, dy) {
    if (this.x - this.newX == 0) {
      this.newX += dx;
    } 
    if (this.y - this.newY == 0) {
      this.newY += dy;
    } 
    
  }
  
  draw() {
    print(player.x);
    

    
    push();
    //translate(this.x, this.y, this.z);
    
    rotateZ(PI/4);
    strokeWeight(0.25);
    fill(55, 200, 255);
    box(7, 7, this.height, 0, 0);
    pop();
  }
}

class Block {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.height = 10;
    
    this.playerY = 0;
  }
  
  update() {
    //this.y += 0.1;
  }
  
  draw() {
    push();
    
    translate(this.x, this.y, this.z);
    strokeWeight(0.25);
    fill(255, 102, 94);
    box(40, 40, this.height, 0, 0);
    pop();
  }
}
