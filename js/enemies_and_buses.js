class Enemies {
  constructor(game, x, y,color, width, height, speed ){
    this.game = game;
    this.x = x;
    this.y = y 
    this.color = color;
    this.width = width;
    this.height = height;
    this.speed = speed;
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
      this.game.ctx.fillStyle = 'blue'
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}



// Create enemies extension for buses,

class Buses extends Enemies {
    constructor (game, x, y,color, width, height, speed ){
        super(game, x, y, color, width, height,speed)
    
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
      this.game.ctx.fillStyle = 'green'
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


class Oldlady extends Enemies {
    constructor (game, x, y,color, width, height, speed){
        super(game, x, y, color, width, height, speed)
    
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
      this.game.ctx.fillStyle = 'pink'
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}


class Redsign extends Enemies {
  constructor (game, x, y,color, width, height, speed){
      super(game, x, y, color, width, height, speed)
  
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
    this.game.ctx.fillStyle = 'yellow'
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}
