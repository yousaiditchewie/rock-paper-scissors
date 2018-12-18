// **** DATA MODEL ****
// import ImageUrl from './models/ImageUrl';

var messages = [
  'Choose your play...',
  'Tie game. Play again...',
  'You Win!!!',
  'You lose...'
];

var imageUrls = [
  './dist/assets/computer.png',
  './dist/assets/rock.png',
  './dist/assets/paper.png',
  './dist/assets/scissors.png'
];

var game = {
  isWon: false,
  length: 1,
  player1: 'Player 1',
  player2: 'Computer',
  player1Score: 0,
  player2Score: 0,
  message: messages[0],
  computerImgUrl: imageUrls[0],
  winner: undefined,
  tie: false
};

var rock = 1;
var paper = 2;
var scissors = 3;

function startGame() {
  game.isWon = false;
  game.length = 1;
  game.player1 = 'Player 1';
  game.player2 = 'Computer';
  game.player1Score = 0;
  game.player2Score = 0;
  game.message = messages[0];
  game.computerImgUrl = imageUrls[0];
  game.winner = undefined;
  game.tie = false;
  showAllHands();
  render();
}

// **** GAME LOGIC ****
function evaluateWinner(player1Play, player2Play) {
  game.tie = false;
  if (player1Play === player2Play) {
    return tieGame();
  } else if (
    (player1Play === rock && player2Play === paper) ||
    (player1Play === paper && player2Play === scissors) ||
    (player1Play === scissors && player2Play === rock)
  ) {
    game.player2Score++;
    return (game.winner = game.player2);
  } else {
    game.player1Score++;
    return (game.winner = game.player1);
  }
}

function tieGame() {
  return (game.tie = true);
}

function generateComputerPlay() {
  return (player2Play = Math.floor(Math.random() * (4 - 1) + 1));
}

function setGameDuration(val) {
  return (game.length = val);
}

function checkGameIsOver() {
  if (game.player1Score + game.player2Score === game.length) {
    return (game.isWon = true);
  } else {
    return (game.isWon = false);
  }
}

function play(hand) {
  var playWord = hand.id;
  var playNumber = eval(hand.id);
  var computerPlay = generateComputerPlay();
  hideHands(playWord);
  showComputerPlay(computerPlay);
  evaluateWinner(playNumber, computerPlay);
  updateMessage();
  render();
}

function updateMessage() {
  if (game.tie) {
    return (game.message = messages[1]);
  } else if (game.winner === game.player1) {
    return (game.message = messages[2]);
  } else {
    return (game.message = messages[3]);
  }
}

function showComputerPlay(computerPlay) {
  return (game.computerImgUrl = imageUrls[computerPlay]);
}

function hideHands(playedHand) {
  if (playedHand === 'rock') {
    paperEl.classList.add('hide-this');
    scissorsEl.classList.add('hide-this');
  } else if (playedHand === 'paper') {
    rockEl.classList.add('hide-this');
    scissorsEl.classList.add('hide-this');
  } else {
    rockEl.classList.add('hide-this');
    paperEl.classList.add('hide-this');
  }
}

function showAllHands() {
  rockEl.classList.remove('hide-this');
  paperEl.classList.remove('hide-this');
  scissorsEl.classList.remove('hide-this');
}

// **** DOM ELEMENT VARIABLES ****
var messageBoard = document.getElementById('message-board');
var computerImg = document.getElementById('computer-img');
var player1Score = document.getElementById('player-1-score');
var player2Score = document.getElementById('player-2-score');
var rockEl = document.getElementById('rock');
var paperEl = document.getElementById('paper');
var scissorsEl = document.getElementById('scissors');

// **** RENDER FUNCTIONS ****
function render() {
  messageBoard.innerHTML = game.message;
  computerImg.src = game.computerImgUrl;
}
