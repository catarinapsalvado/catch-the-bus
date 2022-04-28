//Components

//CLASSES FOR
//PLAYER 1 - THE PERSON
//AVOIDANCES
//RED TRAFFIC LIGHT
//RAIN
//PEOPLE
//BUSES

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 1000;
    this.height = 600;
    this.intervalId = null;
    this.player = player;
    this.controls = null;
    this.enemies = [];
    this.bus = [];
    this.oldLady = [];
    this.redsign = [];
    this.frames = 0;
    this.score = 0;
    this.count = null;
    this.timeOut = null;
    this.background = new Image();
    this.isGameActive = false;
  }

  start() {
    this.player = new Player(this, 495, 300, 100, 100);
    this.count = 60 - Math.floor(this.frames / 60);
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
    this.controls = new Controls(this);
    this.controls.keyboardEvents();
    this.isGameActive = true;
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.frames++;
    this.drawBackground();
    this.player.draw();
    this.timeOut = setTimeout(() => Math.floor((this.count -= 0.02)), 1000);
    this.drawTime();
    this.drawScores();
    this.createEnemies();
    this.createBuses();
     this.createOldLady(); 
    this.createRedSign();
    this.enemies.forEach((enemy) => {
      enemy.x += enemy.speed;
      enemy.draw();
    });
    this.bus.forEach((buses) => {
      buses.y += buses.speed;
      buses.draw();
    });
    this.oldLady.forEach((lady) => {
      lady.y += lady.speed;
      lady.draw();
    });
    this.redsign.forEach((red) => {
      red.y += red.speed;
      red.draw();
    });
    this.checkColisionsBuses();
    this.checkGameOver();
  }

  createEnemies() {
    if (this.frames % 150 === 0) {
      this.enemies.push( new Enemies( this, 0, Math.floor(Math.random() * 600), 100, 100, Math.random() * 3 + 1));
    }
  }

  createBuses() {
    if (this.frames % 190 === 0) {
      this.bus.push( new Buses( this, Math.floor(Math.random() * 900), 0, 125, 70, Math.random() * 3 + 1));}
    
  }

 createOldLady() {
    if (this.frames % 225 === 0) {
      this.oldLady.push(
        new Oldlady(
          this,
          Math.floor(Math.random() * 900),
          0,
          100,
          105,
          Math.random() * 2 + 1
        )
      );
    }
  } 

  drawBackground(){
    this.background.src = './docs/assets/images/vecteezy_high-city-skyline-view-from-bridge-background_6138952.jpg';
    this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height);
  }

  createRedSign() {
    if (this.frames % 230 === 0) {
      this.redsign.push(
        new Redsign(
          this,
          Math.floor(Math.random() * 900),
          0,
          70,
          70,
          Math.random() * 3 + 1
        )
      );
    }
  }
  

  drawTime() {
    if (this.count <= 0) {
      clearInterval(this.intervalId);
    }
    const player = this.player;

    const crashed = this.enemies.some((enemie) => {
      return player.crashWith(enemie);
    });

    const crashed2 = this.oldLady.some((lady) => {
           return player.crashWith(lady);
    });

    const crashed3 = this.redsign.some((sign) => {
      return player.crashWith(sign);
    });

    if (crashed || crashed2 || crashed3 ) {
      this.count -= 5;
      this.enemies = [];
      this.oldLady = [];
      this.redsign = [];

    } /* else if (crashed2)  
    { this.count -= 5;
      this.oldLady = [];

    } else if (crashed3) {
    this.count -= 5;
    this.redsign = [];
    } */

    this.ctx.fillStyle = "white";
    this.ctx.font = "32px Cousine";
    this.ctx.fillText(`Remaining Time: ${this.count.toFixed(0)}`, 40, 70);
  }

  drawScores() {
    this.ctx.font = "40px Cousine";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, 750, 550);
  }

  checkColisionsBuses() {

     for (let i = 0; i < this.bus.length; i++) {
      if (
        this.player.y <= this.bus[i].y + this.bus[i].height &&
        this.player.x + this.player.width >= this.bus[i].x &&
        this.player.x <= this.bus[i].x + this.bus[i].width
      ) {
        this.score++;
        this.bus.splice(i, 1);
      }
    } 
  }

  stop() {
    this.isGameActive= false;
    clearInterval(this.intervalId);
   
  }

  checkGameOver(){

    if (this.count <= 0 && this.score >= 10){
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "white";
      this.ctx.font = "90px Cousine";
      this.ctx.fillText(`You won!`, 30, 250);
      this.ctx.font = "50px Cousine";
      this.ctx.fillText(`Tori arrived safe at home.`, 30, 300);
      this.ctx.fillText(`Congratulations!`, 30, 350);
      this.ctx.fillText(`Your score:${this.score}`, 30, 400);
    }
     else if(this.count <= 0 && this.score < 10) { 
      this.stop();
      this.ctx.clearRect(0, 0, this.width, this.height); 
      this.ctx.fillStyle = "white";
      this.ctx.font = "80px Cousine";
      this.ctx.fillText(`You've lost!`, 30, 250);
      this.ctx.font = "50px Cousine";
      this.ctx.fillText(`Click START and try again.`, 30, 300);
      this.ctx.fillText(`Your score: ${this.score}`, 30, 350);

  }
  
}
}







