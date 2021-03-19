const GameState = {
  PLAYING: 0,
  PAUSED: 1,
  MENU: 2
};

const Category = {
  NUMBERS: 0,
  COLORS: 1
};

function setup() {
  createCanvas(windowWidth, windowHeight);
    game = new Game();
    box1 = new Box();
    numbers = ["いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう", "じゅう"]

}



function draw() {
  background(220);
  frameRate(60);
  box1.fall();
  box1.draw();
  
  if (box1.y > windowHeight) {
    delete box1;
    box1 = new Box();
  }
}

//   Math.floor(Math.random() * numbers.length);

class Game {
  constructor() {
    
  }
  
  draw() {
    //translate(windowWidth / 2, windowHeight / 2);
    fill(255, 0, 0);
    rect(windowWidth - 100, 0, 100, 100);
  }
}

class Box {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = Math.floor(Math.random() * (windowWidth - 100));
    this.y = -this.height 
  }
  
  fall() {
    this.y += 10;
  }
  
  draw() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}

/*
一
二
三
四
五
六
七
八
九
十
*/
