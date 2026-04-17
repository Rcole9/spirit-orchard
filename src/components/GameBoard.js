

import React, { useState, useEffect } from "react";

// World grid: G = Grass, D = Dirt, C = Crop, S = Spirit
const initialMap = [
  ['G','G','G','G','G','G','G','G','G','G'],
  ['G','D','D','D','G','G','D','D','D','G'],
  ['G','D','C','D','G','G','D','S','D','G'],
  ['G','D','D','D','G','G','D','D','D','G'],
  ['G','G','G','G','G','G','G','G','G','G'],
];

const tileSize = 48; // px

const tileImg = {
  G: process.env.PUBLIC_URL + "/assets/kenney_tiny-town/Tiles/tile_0000.png", // grass
  D: process.env.PUBLIC_URL + "/assets/kenney_tiny-town/Tiles/tile_0001.png", // dirt
  C: process.env.PUBLIC_URL + "/assets/kenney_tiny-town/Tiles/tile_0002.png", // crop
  S: process.env.PUBLIC_URL + "/assets/kenney_tiny-town/Tiles/tile_0005.png"  // spirit
};

const playerImg = process.env.PUBLIC_URL + "/assets/kenney_tiny-town/Tiles/tile_0004.png";

export default function GameBoard() {
  // Player starts at bottom right
  const [player, setPlayer] = useState({ x: 1, y: 3 });

  function handleKey(e) {
    setPlayer(prev => {
      let { x, y } = prev;
      if (e.key === "ArrowUp") y = Math.max(0, y - 1);
      else if (e.key === "ArrowDown") y = Math.min(initialMap.length - 1, y + 1);
      else if (e.key === "ArrowLeft") x = Math.max(0, x - 1);
      else if (e.key === "ArrowRight") x = Math.min(initialMap[0].length - 1, x + 1);
      return { x, y };
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={{
      background: "#ddeeff",
      padding: 16,
      borderRadius: 14,
      border: "2px solid #aaa",
      display: "inline-block",
      marginTop: 32,
      boxShadow: "0 4px 24px #93b6c1"
    }}>
      <h3 style={{margin:0, textAlign:"center"}}>Spirit Orchard</h3>
      <div style={{
        position: "relative",
        width: initialMap[0].length * tileSize,
        height: initialMap.length * tileSize,
        outline: "2px solid #333",
        background: "#9acd32"
      }}>
        {initialMap.map((row, y) =>
          row.map((cell, x) => (
            <img
              key={x + "," + y}
              src={tileImg[cell]}
              style={{
                position: "absolute",
                left: x * tileSize,
                top: y * tileSize,
                width: tileSize,
                height: tileSize,
                zIndex: 0
              }}
              alt={cell}
            />
          ))
        )}
        {/* Player sprite */}
        <img
          src={playerImg}
          style={{
            position: "absolute",
            left: player.x * tileSize,
            top: player.y * tileSize,
            width: tileSize,
            height: tileSize,
            zIndex: 2,
            transition: "left 0.1s, top 0.1s"
          }}
          alt="Player"
        />
      </div>
      <p style={{textAlign:"center",marginTop:10, color:"#236"}}>Use arrow keys to move!</p>
      <p style={{textAlign:"center",margin:0,fontSize:12, color:"#888"}}>
        Kenney assets in use! Replace images in <code>public/assets/kenney_tiny-town/Tiles/</code> for your art style!
      </p>
    </div>
  );
}
