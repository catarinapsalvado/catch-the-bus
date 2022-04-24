this.canvas = document.getElementById('canvas');
this.ctx = this.canvas.getContext('2d');
let enemies = [];

class Enemies {
  constructor(game, x, y,color, width, height, /* speed */ ){
    this.game = game;
    this.x = x;
    this.y = y 
    this.color = color;
    this.width = width;
    this.height = height;
  /*   this.speed = speed; */
    }
  

   /*  left() {
      return this.x;
    }
    right() {
      return this.x + this.width;
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.height;
    } */
  
    draw() {
      this.game.ctx.fillStyle = 'blue'
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

enemies = new Enemies(this, Math.floor(Math.random() * 300) , 0, 'blue', 10, 10,/*  {x:1,y:1} */)

console.log(enemies)


// Create enemies extension for buses,

class Buses extends Enemies {
    constructor (game, x, y,color, width, height ){
        super(game, x, y, color, width, height)
    
    }
}

const bus = new Buses (this, Math.floor(Math.random() * 400) , 0, 'green', 10, 10,)

console.log(bus)

class Oldlady extends Enemies {
    constructor (game, x, y,color, width, height ){
        super(game, x, y, color, width, height)
    
    }
}

const oldLady = new Oldlady (this, Math.floor(Math.random() * 300) , 0, 'pink', 10, 10,)

console.log(oldLady)

class Redsign extends Enemies {
    constructor (game, x, y,color, width, height ){
        super(game, x, y, color, width, height)
    
    }
}

const redSign = new Redsign (this, Math.floor(Math.random() * 300) , 0, 'pink', 10, 10,)

console.log(redSign)