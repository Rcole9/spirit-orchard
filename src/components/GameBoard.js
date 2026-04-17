


import { TILEMAP, TILE_IMAGES, PLAYER_SPRITE, SPIRIT_SPRITE } from "../assets/tilemap";

const tileSize = 48; // px


export default function GameBoard() {
  // Player starts at center
  const [player, setPlayer] = useState({ x: 2, y: 2 });

  function handleKey(e) {
    setPlayer(prev => {
      let { x, y } = prev;
      if (e.key === "ArrowUp") y = Math.max(0, y - 1);
      else if (e.key === "ArrowDown") y = Math.min(TILEMAP.length - 1, y + 1);
      else if (e.key === "ArrowLeft") x = Math.max(0, x - 1);
      else if (e.key === "ArrowRight") x = Math.min(TILEMAP[0].length - 1, x + 1);
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
        width: TILEMAP[0].length * tileSize,
        height: TILEMAP.length * tileSize,
        outline: "2px solid #333",
        background: "#9acd32"
      }}>
        {TILEMAP.map((row, y) =>
          row.map((cell, x) => (
            <img
              key={x + "," + y}
              src={TILE_IMAGES[cell]}
              style={{
                position: "absolute",
                left: x * tileSize,
                top: y * tileSize,
                width: tileSize,
                height: tileSize,
                zIndex: 0
              }}
              alt={"tile-" + cell}
            />
          ))
        )}
        {/* Player sprite */}
        <img
          src={PLAYER_SPRITE}
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
        Kenney and Pixel Crawler assets in use!<br/>
        Now showing Farm, Furniture, and Pixel Tree props.<br/>
        More non-Kenney assets coming soon.
      </p>
    </div>
  );
}
