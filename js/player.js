class Player {
  constructor(game, x, y, width, height){
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.direction = 'right';
  }

  

    draw() {
     
      if (this.direction === 'right') { 
      if (this.game.frames % 80 === 0){
        this.img.src = './docs/assets/images/player_!.png'

      }else if (this.game.frames % 40 ===0){
        this.img.src = './docs/assets/images/player_2.png'

      } else if (this.game.frames % 20 ===0) {
        this.img.src = './docs/assets/images/player_3.png'

      }  
      } else {
      if (this.game.frames % 80 === 0){
        this.img.src = './docs/assets/images/player_1_left.png'

      }else if (this.game.frames % 40 ===0){
        this.img.src = './docs/assets/images/player_2_left.png'

      } else if (this.game.frames % 20 ===0) {
        this.img.src = './docs/assets/images/player_3_left.png'

      }   
      } 
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 10;
    this.direction = 'left'; 
  }

  moveRight() {
    this.x += 10;
   this.direction = 'right'; 
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

  crashWith(enemies) {
    return !(
      this.bottom() < enemies.top() ||
      this.top() > enemies.bottom() ||
      this.right() < enemies.left() ||
      this.left() > enemies.right()
    );
  }
}

const player = new Player();

console.log(player);

