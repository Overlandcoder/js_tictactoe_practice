const buttons = document.querySelectorAll(".cell");

buttons.forEach(button => {
  button.addEventListener("click", game.playRound);
});

const gameboard = (function () {
  let boardArray = [];

})();

function Player (name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

const game = (function () {
  player1 = new Player("Player 1");
  player2 = new Player("Player 2");
  player1.symbol = ["X", "O"].random();
})();
