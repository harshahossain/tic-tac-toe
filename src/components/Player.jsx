import React, { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  //
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(evt) {
    setPlayerName(evt.target.value);
  }

  let editablePlayerName = <span className="player-Name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        placeholder="Enter Name"
        required
        onChange={handleChange}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
