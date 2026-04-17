import React from "react";
import GameBoard from "./components/GameBoard";
import Spirit from "./components/Spirit";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>🌱 Spirit Orchard 🌱</h1>
      <p>A cozy farming and spirit-befriending game prototype.</p>
      <p>Start building your orchard and befriend gentle spirits!</p>
      <GameBoard />
      <div style={{ marginTop: 32 }}>
        <h3>Spirits</h3>
        <Spirit name="Willow" />
        <Spirit name="Ember" />
      </div>
    </div>
  );
}

export default App;
