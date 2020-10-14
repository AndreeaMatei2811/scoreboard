import React, { useState } from "react";

export default function AddPlayer({ addPlayerCallback }) {
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addClicked = () => {
    addPlayerCallback(name);
  };

  return (
    <div>
      <p>
        New player
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onNameChange}
        />{" "}
        <button onClick={addClicked}>ADD</button>
      </p>
    </div>
  );
}
