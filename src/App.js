import React from "react";
import AudioPlayer from "./components/UI/AudioPlayer";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>🌱 Spirit Orchard 🌱</h1>
      <p>A cozy farming and spirit-befriending game prototype.</p>
      <p>Start building your orchard and befriend gentle spirits!</p>
      <AudioPlayer />
    </div>
  );
}

export default App;
