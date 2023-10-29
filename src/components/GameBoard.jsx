import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  //
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectBox(rowIndx, colIndx) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ]; //following immutable way//need to map cause nested arrays//need to make the new const cause how javascirpt shedules changes
  //       updatedBoard[rowIndx][colIndx] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndx) => (
        <li key={rowIndx}>
          <ol>
            {row.map((playerSymbol, colIndx) => (
              <li key={colIndx}>
                <button onClick={() => onSelectSquare(rowIndx, colIndx)}>
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
