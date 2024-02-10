import { useState } from "react";
import "./App.css";
import mainLogo from "/game-logo.png";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}
function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((array) => [...array])]; //otherwise gameboard wont reset because we werent immuting the initial gameboard before

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      // was players[firstSquareSymbol] but bugged
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    Y: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = derivedActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndx, colIndx) {
    // setActivePlayer((prevActivePlayer) =>
    //   prevActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndx, col: colIndx }, player: currentPlayer },
        ...prevTurns,
      ]; //making sure to follow the immutable pattern for state handling where prevState is needed for new State
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <header>
        <img src={mainLogo} alt="Hand Drawn Tic Tac Toe Board" />
        <h1>Tic-Tac-Toe</h1>
      </header>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
