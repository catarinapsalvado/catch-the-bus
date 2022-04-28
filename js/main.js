let startScreen = document.getElementById('start-page');
let game 

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startScreen.style.display = 'none'; 
    startGame();
  };

  function startGame() {
    
    if(!game || !game.isGameActive){
      game = new Game();
      game.start();
    } 
    console.log(game.isGameActive)
  }
};