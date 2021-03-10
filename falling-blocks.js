function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game(windowWidth, windowHeight);
}

function mousePressed() {
  game.player.changeDirection();
}

function mouseReleased() {
  //player.idle();
}

function draw() {
  background(220);
  //print(player.direction);
  game.draw();
}

class Obj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  update() {
    this.y += 1;
  }
  
  draw() {
    rectMode(CENTER);
    fill(200, 0, 0);
    rect(this.x, this.y, 60, 100)
  }
}

class Game {
  constructor(width, height) {
    this.player = new Player(width / 2, height - height / 5);
    this.objs = [];
    
    this.spawnObj();
  }
  
  spawnObj() {
    this.objs.push(new Obj(20, -this.player.height));
  }
  
  draw() {
    this.player.move();
    this.player.draw();
    
    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].update();
      this.objs[i].draw();
    }
  }
  
}


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 100;
    this.direction = 0;
  }
  
  changeDirection() {
    if (this.direction == 1) {
      this.direction = -1;
    } else {
      this.direction = 1;
    }
  }
  
  idle() {
    this.direction = 0;
  }
  
  move() {
    this.x += this.direction;
  }
  
  draw() {
    rectMode(CENTER);
    fill(100);
    rect(this.x, this.y, 60, this.height);
  }
}
