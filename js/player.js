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
  
      crashWith(enemies) {
        return !(
          this.bottom() < enemies.top() ||
          this.top() > enemies.bottom() ||
          this.right() < enemies.left() ||
          this.left() > enemies.right()
        );
}

        crashWith(redSign) {
            return !(
              this.bottom() < redSign.top() ||
              this.top() > redSign.bottom() ||
              this.right() < redSign.left() ||
              this.left() > redSign.right()
            );}

            crashWith(oldLady) {
              return !(
                this.bottom() < oldLady.top() ||
                this.top() > oldLady.bottom() ||
                this.right() < oldLady.left() ||
                this.left() > oldLady.right()
              );}
              
            crashWith(buses) {
                return !(
                  this.bottom() < buses.top() ||
                  this.top() > buses.bottom() ||
                  this.right() < buses.left() ||
                  this.left() > buses.right()
                );}
    }




const player = new Player


console.log(player)


//CLASS ENEMIES AND BUSES 

