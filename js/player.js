this.canvas = document.getElementById('canvas');
this.ctx = this.canvas.getContext('2d');

class Player {
  
    constructor(game, x, y,color, width, height) {
      this.game = game; 
      this.x = x;
      this.y = y;
      this.color = color
      this.width = width;
      this.height = height;
      //this.img = new Image();
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      }

      moveLeft() {
        this.x -= 10;
      }
      moveRight() {
        this.x += 10;
      }

      moveUp() {
        this.y -= 10;
      }
      moveDown() {
        this.y += 10;
      }
    
      left() {
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
      }
  
}

const player = new Player(this, 100, 100, 'red', 50, 50);


console.log(player)


//CLASS ENEMIES AND BUSES 

class Enemies {
  constructor(game) {
      this.game = game;
      this.x = Math.floor(Math.random() * 300);
      this.y = 0;
      this.color = color;
      this.width = 25;
      this.height = 25;
    }
  
    left() {
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
    }
  
    draw() {
      this.game.ctx.fillStyle = this.color;
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const enemies = new Enemies( 0, 0, 'blue', 25, 25);

console.log(enemies)
