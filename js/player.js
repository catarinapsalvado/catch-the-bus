class Player {
  constructor(game, x, y,/*  color */ width, height, ){
    this.game = game;
    this.x = x;
    this.y = y;
    //this.color = color;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }

  /* draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height,this.img);
  } */

    draw() {
      this.img.src = '/docs/images/giphy.gif';
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

