function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  
  banner = new Banner();
  body = new Body();
}

function mousePressed() {
  body.click(mouseX, mouseY);
}



function draw() {
  background(235);
  banner.draw();
  body.draw();
}

class Airplane {
  constructor() {
    this.x = -100;
    this.y = 100;
    this.rotate = sin(this.x / 28);
  }
  
  update() {
    this.x += 2;
    this.y = sin((this.x + 100) / 24) * 45 + 100;
    this.rotate = sin(this.x / 24) / 5;
    
    if (this.x > windowWidth + 100) {
      this.x = -100;
      this.y = 100;
      this.rotate = sin(this.x / 100);
    }
  }
  
  draw() {
    push();
    translate(this.x - 60, this.y - 20);
    rotate(this.rotate);

    noStroke();
    fill("#8e7dbe");
    triangle(9, 12, 20, 20, 120, 20);
    fill(0, 0, 0, 50);
    triangle(9, 12, 20, 20, 48, 20);

    fill("#8e7dbe");
    triangle(20, 20, 20, 42, 120, 20);
    fill(0, 0, 0, 90);
    triangle(20, 20, 20, 42, 120, 20);

    fill(0, 0, 0, 60);
    rect(20, 20, 22, 11);
    fill(0, 0, 0, 30);
    rect(20, 20, 8, 11);
    pop();
  }
}

class Banner {
  constructor() {
    this.height = 200;
    this.width = windowWidth;
    
    this.airplane = new Airplane();
  }
  
  draw() {
    fill(240);
    
    noStroke();
    rect(0, 0, this.width, this.height);
    
    this.airplane.update();
    this.airplane.draw();
  }
}

class ProjectTile {
  constructor() {
    this.tileWidth = 200;
    this.tileHeight = 160;
    
    this.x = windowWidth / 2 - this.tileWidth / 2;
    this.y = 200 + this.tileHeight / 2;
  }
  
  click(x, y) {
    if (this.x < x && this.x + this.tileWidth > x) {
      if (this.y < y && this.y + this.tileHeight > y) {
        window.open('https://www.chess.com/home');
      }
    }
  }
  
  draw() {
    translate(this.x, this.y);
    fill(0);
    rect(0, 0, this.tileWidth, this.tileHeight, 12);
  }
}

class Body {
  constructor() {
    this.projectTiles = [];

    this.setup();
  }
  
  setup() {
    this.projectTiles.push(new ProjectTile());
  }
  
  click(x, y) {
    for (let i = 0; i < this.projectTiles.length; i++) {
      this.projectTiles[i].click(x, y);
    }
  }
  
  draw() {
    for (let i = 0; i < this.projectTiles.length; i++) {
      this.projectTiles[i].draw();
    }
  }
}
