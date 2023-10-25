import React, { useState } from "react";

export default function Player({ name, symbol }) {
  //
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }
  let playerName = <span className="player-Name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text" placeholder="Enter Name"></input>;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
