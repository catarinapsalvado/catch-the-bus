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
        this.frames = 0;
    }

     
      start() {   
          this.player = new Player(this, 100, 100, 'red', 50, 50);
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
        //this.drawScores();  
       /*  this.createEnemies(); 
         this.enemies.forEach((enemy) => {
          enemy.y++;
          enemy.draw(); */
        /* }); */
        this.checkGameOver();  
      } 
      
    createEnemies() {

      setInterval (() => {
        enemies.push(new Enemy())}, 1000)
      }
      
       /*  if (this.frames % 100 === 0) {
        this.enemies.push(enemy); */
  

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
    
    }
    

    


