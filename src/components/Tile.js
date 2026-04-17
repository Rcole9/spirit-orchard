
import React from 'react';
import { EMPTY_TILE_IMG, PLANTED_TILE_IMG } from '../assets/tileImages';


function Tile({ type, onClick }) {
  const imgSrc = type === 'planted' ? PLANTED_TILE_IMG : EMPTY_TILE_IMG;
  const style = {
    width: 40,
    height: 40,
    border: '2px solid #b7e0c7',
    borderRadius: 8,
    background: `url(${imgSrc}) center/cover no-repeat, #e6d3b3` ,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    boxShadow: '0 2px 8px #b7e0c7',
    margin: 1,
    transition: 'box-shadow 0.2s',
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
