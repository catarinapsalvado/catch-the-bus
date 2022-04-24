class Controls {
constructor(game) {
    this.game = game;
    this.player= this.game.player;
  }

  keyboardEvents() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowRight':
            if (this.player.x + this.player.width < 1000) {
            this.player.moveRight();
          }
          break;
        case 'ArrowLeft':
            if (this.player.x > 0) {
            this.player.moveLeft();
          }
          break;
        case 'ArrowUp':
            if (this.player.y > 0) {
            this.player.moveUp();
          }
          break;
        case 'ArrowDown':
            if (this.player.y + this.player.width < 600) {
            this.player.moveDown();
          }
        break;
          
      }
    });
  }
}
