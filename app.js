//TETRIS

function App() {
  var gameLoop = start();
  var game;
}

function start() {
  game = new Game();
  var gameLoop;
  var speediness = 1000;

  var play = function() {
    game.draw();
    setTimeout(play, speediness);
  };

  play();

  return gameLoop;
};

new App();