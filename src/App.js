import React from "react";
import Title from "./Components/Title";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import "./App.scss";

function App() {
  return (
    <div>
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
