import React, { useState } from "react";

export default function Player({ name, symbol }) {
  //
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-Name">{name}</span>}
        {isEditing && <input type="text"></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
