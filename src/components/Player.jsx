import React, { useState } from "react";

export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-Name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
