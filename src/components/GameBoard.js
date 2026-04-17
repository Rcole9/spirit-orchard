
import React, { useState } from 'react';
import Tile from './Tile';

const BOARD_SIZE = 5;

function GameBoard() {
  const [tiles, setTiles] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill('empty'));

  const handleTileClick = idx => {
    setTiles(tiles => {
      const newTiles = [...tiles];
      newTiles[idx] = newTiles[idx] === 'empty' ? 'planted' : 'empty';
      return newTiles;
    });
  };

  return (
    <div style={{ display: 'inline-block', margin: '24px auto' }}>
      <h2>Game Board</h2>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${BOARD_SIZE}, 40px)`, gap: 2 }}>
        {tiles.map((type, idx) => (
          <Tile key={idx} type={type} onClick={() => handleTileClick(idx)} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
