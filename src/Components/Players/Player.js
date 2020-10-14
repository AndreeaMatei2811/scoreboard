import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    console.log(props.id);
    props.incrementScore(props.id);
  };

  return (
    <div className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        Player {props.name}, score: {props.score}
      </p>
      <button onClick={onClickIncrement}>Add 1 point</button>
    </div>
  );
}
