import React from "react";
import AnimatedSprite from "./components/AnimatedSprite";
import GameBoard from "./components/GameBoard";
import Spirit from "./components/Spirit";

function App() {
  React.useEffect(() => {
    document.body.style.background =
      'linear-gradient(135deg, #e6d3b3 0%, #b7e0c7 100%)';
    document.body.style.fontFamily =
      '"Quicksand", "Segoe UI", "Arial Rounded MT Bold", Arial, sans-serif';
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "40px auto",
        maxWidth: 520,
        background: "rgba(255,255,255,0.95)",
        borderRadius: 24,
        boxShadow: "0 4px 32px #b7e0c7, 0 1.5px 0 #e6d3b3 inset",
        padding: 32,
        border: "2px solid #b7e0c7",
      }}
    >
      <h1 style={{ fontFamily: 'inherit', fontWeight: 700, color: '#5a4b2c', letterSpacing: 1 }}>
        🌱 Spirit Orchard 🌱
      </h1>
      <p style={{ color: '#6b5b3e', fontSize: 18, margin: 0 }}>
        A cozy farming and spirit-befriending game prototype.
      </p>
      <p style={{ color: '#6b5b3e', fontSize: 16, marginBottom: 18 }}>
        Start building your orchard and befriend gentle spirits!
      </p>
      <h2 style={{ color: '#7a5c2e', margin: '18px 0 8px' }}>Your Farmer:</h2>
      <AnimatedSprite
        src={process.env.PUBLIC_URL + "/assets/farmer.png"}
        frameWidth={32}
        frameHeight={32}
        frames={4}
        fps={8}
        style={{ margin: 16, borderRadius: 8, border: '2px solid #b7e0c7', background: '#e6d3b3' }}
      />
      <GameBoard />
      <div style={{ marginTop: 32, background: '#f7f3e9', borderRadius: 16, padding: 16, border: '1.5px solid #b7e0c7', boxShadow: '0 1px 8px #e6d3b3' }}>
        <h3 style={{ color: '#7a5c2e', margin: 0 }}>Spirits</h3>
        <Spirit name="Willow" />
        <Spirit name="Ember" />
      </div>
    </div>
  );
}

export default App;
