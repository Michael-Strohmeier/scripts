function setup() {
  createCanvas(windowWidth, windowHeight);
  kana = new Kana(windowWidth, windowHeight)
}

function draw() {
  background(220);
  kana.draw();
}

let romajiTable = [['a', 'あ', 'ア'], ['i', 'い', 'イ'], ['u', 'う', 'ウ'], ['e', 'え', 'エ'], ['o', 'お', 'オ'], ['ka', 'か', 'カ'], ['ki', 'き', 'キ'], ['ku', 'く', 'ク'], ['ke', 'け', 'ケ'], ['ko', 'こ', 'コ'], ['sa', 'さ', 'サ'], ['shi', 'し', 'シ'], ['su', 'す', 'ス'], ['se', 'せ', 'セ'], ['so', 'そ', 'ソ'], ['ta', 'た', 'タ'], ['chi', 'ち', 'チ'], ['tsu', 'つ', 'ツ'], ['te', 'て', 'テ'], ['to', 'と', 'ト'], ['na', 'な', 'ナ'], ['ni', 'に', 'ニ'], ['nu', 'ぬ', 'ヌ'], ['ne', 'ね', 'ネ'], ['no', 'の', 'ノ'], ['ha', 'は', 'ハ'], ['hi', 'ひ', 'ヒ'], ['fu', 'ふ', 'フ'], ['he', 'へ', 'ヘ'], ['ho', 'ほ', 'ホ'], ['ma', 'ま', 'マ'], ['mi', 'み', 'ミ'], ['mu', 'む', 'ム'], ['me', 'め', 'メ'], ['mo', 'も', 'モ'], ['ya', 'や', 'ヤ'], ['yu', 'ゆ', 'ユ'], ['yo', 'よ', 'ヨ'], ['ra', 'ら', 'ラ'], ['ri', 'り', 'リ'], ['ru', 'る', 'ル'], ['re', 'れ', 'レ'], ['ro', 'ろ', 'ロ'], ['wa', 'わ', 'ワ'], ['wo', 'を', 'ヲ'], ['n', 'ん', 'ン'], ['ga', 'が', 'ガ'], ['gi', 'ぎ', 'ギ'], ['gu', 'ぐ', 'グ'], ['ge', 'げ', 'ゲ'], ['go', 'ご', 'ゴ'], ['za', 'ざ', 'ザ'], ['ji', 'じ', 'ジ'], ['zu', 'ず', 'ズ'], ['ze', 'ぜ', 'ゼ'], ['zo', 'ぞ', 'ゾ'], ['da', 'だ', 'ダ'], ['di', 'ぢ', 'ヂ'], ['du', 'づ', 'ヅ'], ['de', 'で', 'デ'], ['do', 'ど', 'ド'], ['ba', 'ば', 'バ'], ['bi', 'び', 'ビ'], ['bu', 'ぶ', 'ブ'], ['be', 'べ', 'ベ'], ['bo', 'ぼ', 'ボ'], ['pa', 'ぱ', 'パ'], ['pi', 'ぴ', 'ピ'], ['pu', 'ぷ', 'プ'], ['pe', 'ぺ', 'ペ'], ['po', 'ぽ', 'ポ']]



class Character {
  constructor(t, c) {
    this.text = t;
    this.color = c
  }
}


class Kana {
  constructor(w, h) {
    this.word = "あたまかたひざあしひざあし";
    this.characters = [];
    
    this.w = w;
    this.h = h;
    
    this.textSize = this.w / this.word.length / 1.2;
    
    this.blue = color(66, 133, 244, 200);
    this.red = color(219, 68, 55, 200);
    this.yellow = color(244, 180, 0, 200);
    this.green = color(15, 157, 88, 200);
    this.purple = color(107, 48, 150, 200);
    this.pink = color(255,105,180);
    
    this.update();
  }
  
  getColor(i) {
    let w = romajiTable[i][0]
    if (w.includes("a")) {
      return this.blue;
    } else if (w.includes("i")) {
      return this.red;
    } else if (w.includes("u")) {
      return this.yellow;
    } else if (w.includes("e")) {
      return this.green;
    } else if (w.includes("o")) {
      return this.purple;
    } else {
      return this.pink;
    }
    
  }
  
  update() {
    for (let i = 0; i < this.word.length; i++) {
      for (let j = 0; j < romajiTable.length; j++) {
        if (romajiTable[j][1] == this.word[i]) {
          this.characters.push(new Character(this.word[i], this.getColor(j)));
          break;
        }
    }
    }
  }
  
  draw() {
    textFont('georgia');

    let l = this.characters.length;
    for (let i = 0; i < this.characters.length; i++) {
      push();
      translate(this.w / 2, this.h / 2);
      fill(this.characters[i].color);

      textSize(this.textSize);
      textAlign(CENTER, CENTER);

      text(this.characters[i].text, -l * this.textSize/2 + this.textSize * i + this.textSize/2, 0);
      pop();
    }
  }
}
