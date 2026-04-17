import React from 'react';

function Tile({ type, onClick }) {
  return (
    <div className={`tile tile-${type}`} onClick={onClick}>
      {/* Render tile content based on type */}
      {type}
    </div>
  );
}

export default Tile;
