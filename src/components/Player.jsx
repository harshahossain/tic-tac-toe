import React, { useState } from "react";

export default function Player({ name, symbol }) {
  //
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
  }
  let playerName = <span className="player-Name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" value={name} placeholder="Enter Name" required></input>
    );
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
