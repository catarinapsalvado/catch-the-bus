//Components

//CLASSES FOR 
//PLAYER 1 - THE PERSON 
//AVOIDANCES 
//RED TRAFFIC LIGHT
//RAIN
//PEOPLE 
//BUSES 

class Game {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
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
    }

     
      start() {   
          this.player = new Player(this, 495, 300, 'red', 50, 50);
          this.intervalId = setInterval(() => {
          this.update();
          }, 1000 / 60);; 
          this.controls = new Controls(this);
          this.controls.keyboardEvents();
       }

      update() { 
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.frames++;
        this.player.draw();
        //this.drawBackground(); 
        this.drawTime();
        this.drawScores() 
        this.createEnemies();  
        this.createBuses();
        this.createOldLady();
        this.createRedSign();
        this.enemies.forEach((enemy) => {
          enemy.y+=enemy.speed;
          enemy.draw(); 
         }); 
         this.bus.forEach((buses) => {
          buses.y+=buses.speed;
          buses.draw(); 
         });
         this.oldLady.forEach((lady) => {
          lady.y+=lady.speed;
          lady.draw(); 
         });
         this.redsign.forEach((red) => {
          red.y+=red.speed;
          red.draw(); 
         });
         this.checkColisionsEnemies();
         this.checkColisionsBuses();
         //this.checkGameOver();
        }
        
      
  
    createEnemies() {
      if (this.frames % 200 === 0) {
        this.enemies.push(new Enemies(this, Math.floor(Math.random() * 1000) , 0, 'blue', 20, 20, Math.random()*3+1));
      }
    }

    createBuses() {
      if (this.frames % 100 === 0) {
        this.bus.push(new Buses(this, Math.floor(Math.random() * 1000) , 0, 'green', 20, 20, Math.random()*3+1));

      }
    }

    createOldLady() {
      if (this.frames % 200 === 0) {
        this.oldLady.push(new Oldlady(this, Math.floor(Math.random() * 1000) , 0, 'pink', 20, 20, Math.random()*2+1));

      }
    }

    createRedSign(){
      if (this.frames % 200 === 0) {
        this.redsign.push(new Redsign(this, Math.floor(Math.random() * 1000) , 0, 'yellow', 20, 20, Math.random()*3+1));
    }

  }

    drawTime() {
  
      
      let count = 30 -  Math.floor(this.frames / 60); 
      if (count <= 0 ) {
        clearInterval(this.intervalId)
      }
      this.ctx.fillStyle = "black";
      this.ctx.font = "20px Times New Roman";
      this.ctx.fillText(`Remaining Time: ${count}`, 40, 70);
     
    }

    
    drawScores() {
    this.ctx.font = '32px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.score}`, 800, 550);
  }

  
    checkColisionsEnemies() {
      const player = this.player;
      const crashed = this.enemies.some(function (enemy) {
        return player.crashWith(enemy);
      });

      const crashed2 = this.redsign.some(function (redsign) {
        return player.crashWith(redsign);  });

      const crashed3 = this.oldLady.some(function (lady) {
        return player.crashWith(lady);  });

      if (crashed || crashed2 || crashed3) {
        this.stop();
        };
      }
      
       checkColisionsBuses(){
        /* const catchBus = this.bus.some(function (bus) {
          return player.crashWith(bus);
        }); */

        for (let i = 0; i < this.bus.length; i ++){
          if ((this.player.y <= this.bus[i].y + this.bus[i].height) && (this.player.x + this.player.width >= this.bus[i].x) && (this.player.x <= this.bus[i].x + this.bus[i].width)){
          this.score ++;
          this.bus.splice(i, 1); 
          } 
        }
      }
    
      /*     if (this.score % 5 === 0){
            this.bus.splice(0, 1);
          } */
        

         /* if (catchBus) {
          this.score ++
        } 
      } */
 
      
       

    /* checkGameOver() {

      const timesup = this.count <= 0;

      if (timesup) {
        this.stop();
      }
    } */

    stop() {
      clearInterval(this.intervalId);
  }
}






    

/* 
     checkGameOver() {
    const player = this.player;
    const crashed = this.enemies.some(function (enemy) {
      return player.crashWith(enemy);
    }); }

    if (crashed) {
      this.stop();
    }
  
/*     stop() {
        clearInterval(this.intervalId);
      } */
    
    
    

    


