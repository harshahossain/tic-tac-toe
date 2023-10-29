import { useState } from "react";
import "./App.css";
import mainLogo from "/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndx, colIndx) {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndx, col: colIndx }, player: currPlayer },
        ...prevTurns,
      ]; //making sure to follow the immutable pattern for state handling where prevState is needed for new State
      return updatedTurns;
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
          />
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        <Log />
      </div>
    </>
  );
}

export default App;
