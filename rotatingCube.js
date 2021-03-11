let X = 0;
let Y = 40;
let Z = 30;
let centerX = 0;
let centerY = 0;
let centerZ = 0;

let s = 0;

var blocks = [];


function setup() {
  createCanvas(400, 400, WEBGL);
  perspective(PI / 3.0, width / height, 0.1, 500);
  
  let green = color(0, 155, 72);
  let blue = color(0, 69, 173);
  let white = color(255, 255, 255);
  let yellow = color(255, 213, 0);
  let red = color(185, 0, 0);
  let orange = color(255, 89, 0);
  let black = color(0, 0, 0);
  
  // top, bottom, front, back, left, right
  let colors = [blue, black, red, black, black, white]
  blocks.push(new Block(-5, 5, 5, colors));
  
  colors = [blue, black, red, black, yellow, black]
  blocks.push(new Block(5, 5, 5, colors));
  
  colors = [black, green, red, black, black, white]
  blocks.push(new Block(-5, 5, -5, colors));
  
  colors = [black, green, red, black, yellow, black]
  blocks.push(new Block(5, 5, -5, colors));
  
  // "back"
  colors = [blue, black, black, orange, black, white]
  blocks.push(new Block(-5, -5, 5, colors));
  
  colors = [blue, black, black, orange, yellow, black]
  blocks.push(new Block(5, -5, 5, colors));
  
  colors = [black, green, black, orange, black, white]
  blocks.push(new Block(-5, -5, -5, colors));
  
  colors = [black, green, black, orange, yellow, black]
  blocks.push(new Block(5, -5, -5, colors));
}


function draw() {
  background(60);
  
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  
  rotateZ(s);
  
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].draw();
  }
  
  
  s += 0.05;

}


class Block {
  constructor(x, y, z, colors) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.colors = colors;
  }
  
  update() {
    //this.y += 0.1;
  }
  
  draw() {
    push();
    translate(this.x, this.y, this.z);
    strokeWeight(0.25);
    //fill(255, 102, 94);
    //box(8, 8, 8);
    pop();
    
    // top
    push();
    translate(this.x, this.y, this.z + 5);
    strokeWeight(0);
    fill(this.colors[0]);
    plane(10, 10);
    pop();
    
    // bottom
    push();
    translate(this.x, this.y, this.z - 5);
    strokeWeight(0);
    fill(this.colors[1]);
    plane(10, 10);
    pop();
    
    // front
    push();
    translate(this.x, this.y + 5, this.z);
    rotateX(PI / 2);
    strokeWeight(0);
    fill(this.colors[2]);
    plane(10, 10);
    pop();
    
    // back
    push();
    translate(this.x, this.y - 5, this.z);
    rotateX(PI / 2);
    strokeWeight(0);
    fill(this.colors[3]);
    plane(10, 10);
    pop();
    
    // right
    push();
    translate(this.x + 5, this.y, this.z);
    rotateY(PI / 2);
    strokeWeight(0);
    fill(this.colors[4]);
    plane(10, 10);
    pop();
    
    // left
    push();
    translate(this.x - 5, this.y, this.z);
    rotateY(PI / 2);
    strokeWeight(0);
    fill(this.colors[5]);
    plane(10, 10);
    pop();
    
    
    
  }
}
