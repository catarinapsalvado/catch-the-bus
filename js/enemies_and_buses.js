class Enemies {
  constructor(game, x, y, width, height, speed ){
    this.game = game;
    this.x = x;
    this.y = y 
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.img = new Image();
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
  this.img.src = 'docs/assets/images/bird-removebg-preview.png';
this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
  
}



// Create enemies extension for buses,

class Buses extends Enemies {
    constructor (game, x, y, width, height, speed, img ){
        super(game, x, y, width, height,speed, img)
    
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
      this.img.src = 'docs/assets/images/bus2-removebg-preview.png';
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}


class Oldlady extends Enemies {
    constructor (game, x, y, width, height, speed){
        super(game, x, y, width, height, speed)
    
    }

    draw() {
      this.img.src = 'docs/assets/images/oldLady.png';
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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


class Redsign extends Enemies {
  constructor (game, x, y, width, height, speed){
      super(game, x, y, width, height, speed)
  
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
    this.img.src = 'docs/assets/images/red_sign_with_background-removebg-preview.png';
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  }


