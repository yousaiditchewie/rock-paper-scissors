// **** DATA MODEL ****
let messages = [
  'Choose your a hand to play...',
  'Tie game. Play again...',
  'You Win!!!',
  'You lose...'
];

let imageUrls = [
  './assets/computer.png',
  './assets/rock.png',
  './assets/paper.png',
  './assets/scissors.png'
];

let plays = { rock: 1, paper: 2, scissors: 3 };

let game = {
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
  }

  if (
    (player1Play === plays.rock && player2Play === plays.paper) ||
    (player1Play === plays.paper && player2Play === plays.scissors) ||
    (player1Play === plays.scissors && player2Play === plays.rock)
  ) {
    game.player2Score++;
    return (game.winner = game.player2);
  }

  game.player1Score++;
  return (game.winner = game.player1);
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
  let playWord = hand.id;
  let playNumber = plays[hand.id];
  let computerPlay = generateComputerPlay();
  hideHands(playWord);
  showComputerPlay(computerPlay);
  evaluateWinner(playNumber, computerPlay);
  updateMessage();
  render();
}

function updateMessage() {
  if (game.tie) {
    return (game.message = messages[1]);
  }

  if (game.winner === game.player1) {
    return (game.message = messages[2]);
  }

  return (game.message = messages[3]);
}

function showComputerPlay(computerPlay) {
  return (game.computerImgUrl = imageUrls[computerPlay]);
}

function hideHands(playedHand) {
  if (playedHand === 'rock') {
    paperEl.classList.add('hide-this');
    scissorsEl.classList.add('hide-this');
    return;
  }

  if (playedHand === 'paper') {
    rockEl.classList.add('hide-this');
    scissorsEl.classList.add('hide-this');
    return;
  }

  rockEl.classList.add('hide-this');
  paperEl.classList.add('hide-this');
  return;
}

function showAllHands() {
  hands.forEach(hand => {
    try {
      hand.classList.remove('hide-this');
    } catch (error) {
      return;
    }
  });
}

// **** DOM ELEMENT VARIABLES ****
let messageBoard = document.getElementById('message-board');
let computerImg = document.getElementById('computer-img');
let player1Score = document.getElementById('player-1-score');
let player2Score = document.getElementById('player-2-score');
let rockEl = document.querySelector('[data-play="rock"]');
let paperEl = document.querySelector('[data-play="paper"]');
let scissorsEl = document.querySelector('[data-play="scissors"]');
let hands = [rockEl, paperEl, scissorsEl];

// **** RENDER FUNCTIONS ****
function render() {
  messageBoard.innerHTML = game.message;
  computerImg.src = game.computerImgUrl;
}

document.addEventListener('DOMContentLoaded', startGame);
