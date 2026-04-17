
import React from 'react';
import { EMPTY_TILE_IMG, PLANTED_TILE_IMG } from '../assets/tileImages';


function Tile({ type, onClick }) {
  const imgSrc = type === 'planted' ? PLANTED_TILE_IMG : EMPTY_TILE_IMG;
  const style = {
    width: 40,
    height: 40,
    border: '1px solid #aaa',
    background: `url(${imgSrc}) center/cover no-repeat`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
  };
  return (
    <div style={style} onClick={onClick} title={type}>
      {type === 'planted' && (
        <span style={{ position: 'absolute', left: 0, right: 0, bottom: 2, fontSize: 18, textShadow: '0 0 2px #fff' }}>🌱</span>
      )}
    </div>
  );
}

export default Tile;
