import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  //
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectBox(rowIndx, colIndx) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; //following immutable way//need to map cause nested arrays//need to make the new const cause how javascirpt shedules changes
      updatedBoard[rowIndx][colIndx] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndx) => (
        <li key={rowIndx}>
          <ol>
            {row.map((playerSymbol, colIndx) => (
              <li key={colIndx}>
                <button onClick={() => handleSelectBox(rowIndx, colIndx)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
