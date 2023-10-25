import { useState } from "react";
import "./App.css";
import mainLogo from "/game-logo.png";
import Player from "./components/Player";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src={mainLogo} alt="Hand Drawn Tic Tac Toe Board" />
        <h1>Tic-Tac-Toe</h1>
      </header>

      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-1" symbol="X" />
          <Player initialName="Player-2" symbol="O" />
        </ol>
        GameBoard
      </div>
    </>
  );
}

export default App;
