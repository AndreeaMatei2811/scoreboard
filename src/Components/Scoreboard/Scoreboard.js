import React, { useState } from "react";
import Player from "../../Components/Players/Player";
import AddPlayer from "../AddPlayer";

function compareScore(playerA, playerB) {
  return playerB.score - playerA.score;
}

function compareName(playerA, playerB) {
  return playerA.name.localeCompare(playerB.name);
}

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Andreea", score: 5 },
    { id: 2, name: "Maria", score: 5 },
    { id: 3, name: "Elena", score: 5 },
    { id: 4, name: "Alina", score: 5 },
  ]);

  const [sortBy, setSortBy] = useState("name");

  const changeSorting = (event) => {
    console.log("new sort order", event.target.value);
    setSortBy(event.target.value);
  };

  const playersSorted = [...players];

  const incrementScore = (playerId) => {
    const newScore = players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    setPlayers(newScore);
  };

  const resetAllScore = () => {
    const updatePlayers = players.map((p) => {
      return { ...p, score: 0 };
    });
    setPlayers(updatePlayers);
  };

  if (sortBy === "score") {
    playersSorted.sort(compareScore);
  } else {
    playersSorted.sort(compareName);
  }

  const addPlayerCallback = (name) => {
    const newPlayer = {
      id: players.length + 1,
      name,
      score: 0,
    };
    const extraPlayerArray = [...players, newPlayer];

    setPlayers(extraPlayerArray);
  };

  return (
    <div className="Scoreboard">
      <h2>This is the scoreboard:</h2>
      <p>
        {" "}
        Sort order:{" "}
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p></p>Reset all scores:{" "}
      <button onClick={resetAllScore}>Reset score</button>
      <ul>
        {playersSorted.map((player) => {
          return (
            <li key={player.id}>
              <Player
                id={player.id}
                name={player.name}
                score={player.score}
                incrementScore={incrementScore}
              />
            </li>
          );
        })}
      </ul>
      <AddPlayer addPlayerCallback={addPlayerCallback} />
    </div>
  );
}
