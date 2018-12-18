/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// **** DATA MODEL ****\n// import ImageUrl from './models/ImageUrl';\n\nvar messages = [\n  'Choose your play...',\n  'Tie game. Play again...',\n  'You Win!!!',\n  'You lose...'\n];\n\nvar imageUrls = [\n  './dist/assets/computer.png',\n  './dist/assets/rock.png',\n  './dist/assets/paper.png',\n  './dist/assets/scissors.png'\n];\n\nvar game = {\n  isWon: false,\n  length: 1,\n  player1: 'Player 1',\n  player2: 'Computer',\n  player1Score: 0,\n  player2Score: 0,\n  message: messages[0],\n  computerImgUrl: imageUrls[0],\n  winner: undefined,\n  tie: false\n};\n\nvar rock = 1;\nvar paper = 2;\nvar scissors = 3;\n\nfunction startGame() {\n  game.isWon = false;\n  game.length = 1;\n  game.player1 = 'Player 1';\n  game.player2 = 'Computer';\n  game.player1Score = 0;\n  game.player2Score = 0;\n  game.message = messages[0];\n  game.computerImgUrl = imageUrls[0];\n  game.winner = undefined;\n  game.tie = false;\n  showAllHands();\n  render();\n}\n\n// **** GAME LOGIC ****\nfunction evaluateWinner(player1Play, player2Play) {\n  game.tie = false;\n  if (player1Play === player2Play) {\n    return tieGame();\n  } else if (\n    (player1Play === rock && player2Play === paper) ||\n    (player1Play === paper && player2Play === scissors) ||\n    (player1Play === scissors && player2Play === rock)\n  ) {\n    game.player2Score++;\n    return (game.winner = game.player2);\n  } else {\n    game.player1Score++;\n    return (game.winner = game.player1);\n  }\n}\n\nfunction tieGame() {\n  return (game.tie = true);\n}\n\nfunction generateComputerPlay() {\n  return (player2Play = Math.floor(Math.random() * (4 - 1) + 1));\n}\n\nfunction setGameDuration(val) {\n  return (game.length = val);\n}\n\nfunction checkGameIsOver() {\n  if (game.player1Score + game.player2Score === game.length) {\n    return (game.isWon = true);\n  } else {\n    return (game.isWon = false);\n  }\n}\n\nfunction play(hand) {\n  var playWord = hand.id;\n  var playNumber = eval(hand.id);\n  var computerPlay = generateComputerPlay();\n  hideHands(playWord);\n  showComputerPlay(computerPlay);\n  evaluateWinner(playNumber, computerPlay);\n  updateMessage();\n  render();\n}\n\nfunction updateMessage() {\n  if (game.tie) {\n    return (game.message = messages[1]);\n  } else if (game.winner === game.player1) {\n    return (game.message = messages[2]);\n  } else {\n    return (game.message = messages[3]);\n  }\n}\n\nfunction showComputerPlay(computerPlay) {\n  return (game.computerImgUrl = imageUrls[computerPlay]);\n}\n\nfunction hideHands(playedHand) {\n  if (playedHand === 'rock') {\n    paperEl.classList.add('hide-this');\n    scissorsEl.classList.add('hide-this');\n  } else if (playedHand === 'paper') {\n    rockEl.classList.add('hide-this');\n    scissorsEl.classList.add('hide-this');\n  } else {\n    rockEl.classList.add('hide-this');\n    paperEl.classList.add('hide-this');\n  }\n}\n\nfunction showAllHands() {\n  rockEl.classList.remove('hide-this');\n  paperEl.classList.remove('hide-this');\n  scissorsEl.classList.remove('hide-this');\n}\n\n// **** DOM ELEMENT VARIABLES ****\nvar messageBoard = document.getElementById('message-board');\nvar computerImg = document.getElementById('computer-img');\nvar player1Score = document.getElementById('player-1-score');\nvar player2Score = document.getElementById('player-2-score');\nvar rockEl = document.getElementById('rock');\nvar paperEl = document.getElementById('paper');\nvar scissorsEl = document.getElementById('scissors');\n\n// **** RENDER FUNCTIONS ****\nfunction render() {\n  messageBoard.innerHTML = game.message;\n  computerImg.src = game.computerImgUrl;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });