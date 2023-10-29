import React, { useState } from "react";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {/* {console.log(turns.map((turn) => turn.square.row))} */}
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Selected location {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
